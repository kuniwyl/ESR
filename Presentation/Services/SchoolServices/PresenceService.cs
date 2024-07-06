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

public class PresenceService: BaseService<PresenceDto, Presence>, IPresenceService
{
    private readonly IUserRepository _userRepository;
    private readonly ILessonRepository _lessonRepository;
    private readonly ICssRepository _cssRepository;
    
    public PresenceService(IPresenceRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(PresenceDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(PresenceDto entity)
    {
        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }
        
        var lesson = await _lessonRepository.GetById(entity.LessonId);
        if (lesson == null)
        {
            throw new ObjectNotFoundException<Lesson>(entity.LessonId);
        }
        
        var css = await _cssRepository.GetById(lesson.ClassSubjectSemesterId);
        if (css == null)
        {
            throw new ObjectNotFoundException<ClassSubjectSemester>(lesson.ClassSubjectSemesterId);
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
            var parent = user as Parent;
            if (parent == null)
            {
                throw new ObjectNotFoundException<Parent>(user.Id);
            }
            var student = await _userRepository.GetById(parent.StudentId);
            if (student == null)
            {
                throw new ObjectNotFoundException<Student>(parent.StudentId);
            }
            if (css.ClassId != ((Student) student).ClassId)
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
}