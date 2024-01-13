using Application.Dto.School;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;
using Domain.Models;
using Microsoft.VisualBasic.CompilerServices;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class NoticeService: BaseService<NoticeDto, Notice>, INoticeService
{
    private IUserRepository _userRepository;
    
    public NoticeService(INoticeRepository repository, IUserRepository userRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
    }

    public override async void Validate(NoticeDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(NoticeDto entity)
    {
        return true;
    }

    public async Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromSchoolAndSemester(int semeseterId)
    {
        var response = new ServiceResponse<List<NoticeDto>>();
        var notices = await ((INoticeRepository) _repository).GetNoticesFromSchoolAndSemester(semeseterId);
        response.Data = notices.Select(_mapper.Map<NoticeDto>).ToList();
        return response;
    }

    public async Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromSemesterBetweenDates(int semesterId, DateTime fromDate, DateTime toDate)
    {
        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }
        if (user.Role == UserRole.Student)
        {
            var stud = user as Student;
            if (stud == null)
            {
                throw new ObjectNotFoundException<Student>(int.Parse(userId));
            }
            var response = new ServiceResponse<List<NoticeDto>>();
            var notices = await ((INoticeRepository) _repository).GetNoticesFromSemesterBetweenDatesAndClassId(semesterId, fromDate, toDate, stud.ClassId);
            response.Data = notices.Select(_mapper.Map<NoticeDto>).ToList();
            return response;
        }
        else
        {
            var response = new ServiceResponse<List<NoticeDto>>();
            var notices = await ((INoticeRepository) _repository).GetNoticesFromSemesterBetweenDates(semesterId, fromDate, toDate);
            response.Data = notices.Select(_mapper.Map<NoticeDto>).ToList();
            return response;
        }
    }

    public async Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromUserAndSemester(int semesterId)
    {
        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }
        var studentId = user.Role == UserRole.Student ? int.Parse(userId) : (user as Parent)?.StudentId;
        if (studentId == 0)
        {
            throw new ObjectNotFoundException<Student>(int.Parse(userId));
        }
        var student = await _userRepository.GetById(studentId ?? 0) as Student;
        if (student == null)
        {
            throw new ObjectNotFoundException<Student>(int.Parse(userId));
        }
        
        Console.WriteLine(student.ClassId);
        var response = new ServiceResponse<List<NoticeDto>>();
        var notices = await ((INoticeRepository) _repository).GetNoticesFromClassAndSemester(semesterId, student.ClassId);
        response.Data = notices.Select(_mapper.Map<NoticeDto>).ToList();
        return response;
    }

    public async Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromSemesterBetweenDatesByUser(int semesterId, DateTime fromDate, DateTime toDate)
    {
        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }
        var studentId = user.Role == UserRole.Student ? int.Parse(userId) : (user as Parent)?.StudentId;
        if (studentId == 0)
        {
            throw new ObjectNotFoundException<Student>(int.Parse(userId));
        }
        var student = await _userRepository.GetById(studentId ?? 0) as Student;
        if (student == null)
        {
            throw new ObjectNotFoundException<Student>(int.Parse(userId));
        }
        
        var response = new ServiceResponse<List<NoticeDto>>();
        var notices = await ((INoticeRepository) _repository).GetNoticesFromSemesterBetweenDatesAndClassId(semesterId, fromDate, toDate, student.ClassId);
        response.Data = notices.Select(_mapper.Map<NoticeDto>).ToList();
        return response;
    }

    public new async Task<ServiceResponse<NoticeDto>> Add(NoticeDto entity)
    {
        var response = new ServiceResponse<NoticeDto>();
        var notice = _mapper.Map<Notice>(entity);
        var added = await _repository.Add(notice);
        Console.WriteLine(added.Id);
        entity.ClassNotices.ForEach(async cn =>
        {
            await ((INoticeRepository) _repository).AddNoticeToClass(added, cn.ClassId);
        });
        await _repository.SaveChanges();
        response.Data = _mapper.Map<NoticeDto>(notice);
        return response;
    }

    public new async Task<ServiceResponse<NoticeDto>> Update(int id, NoticeDto entity)
    {
        var response = new ServiceResponse<NoticeDto>();
        var notice = await _repository.GetById(id);
        Console.WriteLine($"Updating notice {id}");
        if (notice == null)
        {
            throw new ObjectNotFoundException<Notice>(id);
        }
        
        _mapper.Map(entity, notice);
        var updated = await _repository.Update(notice);
        
        var classNoticesToAdd = entity.ClassNotices.Where(cn => notice.ClassNotices.All(cn2 => cn2.ClassId != cn.ClassId)).ToList();
        classNoticesToAdd.ForEach(async cn =>
        {
            await ((INoticeRepository) _repository).AddNoticeToClass(updated, cn.ClassId);
        });
        
        var classNoticesToRemove = notice.ClassNotices.Where(cn => entity.ClassNotices.All(cn2 => cn2.ClassId != cn.ClassId)).ToList();
        classNoticesToRemove.ForEach(async cn =>
        {
            await ((INoticeRepository) _repository).RemoveNoticeFromClass(updated, cn.ClassId);
        });
        
        await _repository.SaveChanges();
        response.Data = _mapper.Map<NoticeDto>(updated);
        return response;   
    }
}