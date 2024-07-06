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
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class LessonService: BaseService<LessonDto, Lesson>, ILessonService
{
    private readonly IUserRepository _userRepository;
    private readonly ICssRepository _cssRepository;
    public LessonService(ILessonRepository repository, IUserRepository userRepository, ICssRepository cssRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
        _cssRepository = cssRepository;
    }

    public override async void Validate(LessonDto entity)
    {
        throw new NotImplementedException();
    }

    public override async Task<bool> Authorize(LessonDto entity)
    {
        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }

        var css = await _cssRepository.GetById(entity.ClassSubjectSemesterId);
        if (css == null)
        {
            throw new ObjectNotFoundException<ClassSubjectSemester>(entity.ClassSubjectSemesterId);
        }
        
        if (user.Role == UserRole.Teacher)
        {
            if (css.Subject.TeacherId != user.Id)
            {
                return false;
            }
        }
        else if (user.Role == UserRole.Student)
        {
            if (css.ClassId != ((Student) user).ClassId)
            {
                return false;
            }
        }
        else if (user.Role == UserRole.Parent)
        {
            if (css.ClassId != ((Parent) user).Student.ClassId)
            {
                return false;
            }
        }
        else
        {
            return false;
        }

        return true;
    }

    public async Task<ServiceResponse<List<LessonDto>>> GetLessonByCssId(int id)
    {
        var result = await ((ILessonRepository) _repository).GetLessonByCssId(id);
        var mapped = _mapper.Map<List<LessonDto>>(result);
        return new ServiceResponse<List<LessonDto>>
        {
            Success = true,
            Message = "",
            Data = mapped
        };
    }
}