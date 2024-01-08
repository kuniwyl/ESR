using System.ComponentModel.DataAnnotations;
using Application.Dto.School;
using Application.Dto.Users;
using Application.Exceptions;
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

public class CssInstanceService: BaseService<ClassSubjectSemesterInstanceDto, ClassSubjectSemesterInstance>, ICssInstanceService
{
    private readonly ICssRepository _cssRepository;
    private readonly ISemesterRepository _semesterRepository;
    private readonly IUserRepository _userRepository;
    
    public CssInstanceService(ICssInstanceRepository repository, ISemesterRepository semesterRepository, IUserRepository userRepository, ICssRepository cssRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _cssRepository = cssRepository;
        _semesterRepository = semesterRepository;
        _userRepository = userRepository;
    }

    public async Task<ServiceResponse<List<ClassSubjectSemesterInstanceDto>>> GetBySemesterIdAndClassId(int semesterId, int classId)
    {
        Console.WriteLine("service");
        var css = await ((ICssInstanceRepository) _repository).GetBySemesterIdAndClassId(semesterId, classId);
        Console.WriteLine("service after");
        var cssDto = _mapper.Map<List<ClassSubjectSemesterInstanceDto>>(css);
        return new ServiceResponse<List<ClassSubjectSemesterInstanceDto>>
        {
            Data = cssDto,
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<List<ClassSubjectSemesterInstanceDto>>> GetBySemesterAndTeacherId(int semesterId, int teacherId)
    {
        var css = await ((ICssInstanceRepository) _repository).GetBySemesterAndTeacherId(semesterId, teacherId);
        var cssDto = _mapper.Map<List<ClassSubjectSemesterInstanceDto>>(css);
        return new ServiceResponse<List<ClassSubjectSemesterInstanceDto>>
        {
            Data = cssDto,
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<List<ClassSubjectSemesterInstanceDto>>> GetByUser()
    {
        var userId = _contextAccessor.GetUserId();
        var schoolId = _contextAccessor.GetSchoolId();
        var semseter = await _semesterRepository.GetSemesterCurrentSemester(schoolId);
        if (semseter == null) throw new ValidationException<ClassSubjectSemesterInstanceDto>("Semester not found");
        var user = await _userRepository.GetById(IntegerType.FromString(userId));
        if (user.Role == UserRole.Teacher)
        {
            var css = await ((ICssInstanceRepository) _repository).GetBySemesterAndTeacherId(semseter.Id, user.Id);
            var cssDto = _mapper.Map<List<ClassSubjectSemesterInstanceDto>>(css);
            return new ServiceResponse<List<ClassSubjectSemesterInstanceDto>>
            {
                Data = cssDto,
                Message = "",
                Success = true
            };
        } else if (user.Role == UserRole.Student)
        {
            var css = await ((ICssInstanceRepository) _repository).GetBySemesterIdAndClassId(semseter.Id, ((user as Student)!).ClassId);
            var cssDto = _mapper.Map<List<ClassSubjectSemesterInstanceDto>>(css);
            return new ServiceResponse<List<ClassSubjectSemesterInstanceDto>>
            {
                Data = cssDto,
                Message = "",
                Success = true
            };
        } else if (user.Role == UserRole.Parent)
        {
            var student = await _userRepository.GetById(((Parent) user).StudentId);
            if (student == null) throw new ValidationException<ClassSubjectSemesterInstanceDto>("Student not found");
            var css = await ((ICssInstanceRepository) _repository).GetBySemesterIdAndClassId(semseter.Id, ((student as Student)!).ClassId);
            var cssDto = _mapper.Map<List<ClassSubjectSemesterInstanceDto>>(css);
            return new ServiceResponse<List<ClassSubjectSemesterInstanceDto>>
            {
                Data = cssDto,
                Message = "",
                Success = true
            };
        }
        else
        {
            throw new ValidationException("User not found");
        }
    }

    public async override Task<ServiceResponse<ClassSubjectSemesterInstanceDto>> Add(ClassSubjectSemesterInstanceDto entity)
    {
        var numberOfCss = await ((ICssInstanceRepository) _repository).CountByCssId(entity.ClassSubjectSemesterId);
        var css = await _cssRepository.GetById(entity.ClassSubjectSemesterId);
        if (numberOfCss >= css.Count)
        {
            throw new CssLimitException();
        }
        return await base.Add(entity);
    }

    public override async void Validate(ClassSubjectSemesterInstanceDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(ClassSubjectSemesterInstanceDto entity)
    {
        return true;
    }
}