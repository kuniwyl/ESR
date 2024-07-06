using Application.Dto.School;
using Application.Exceptions;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class FinalGradeService: BaseService<FinalGradeDto, FinalGrade>, IFinalGradeService
{
    private readonly ICssRepository _cssRepository;
    private readonly ISubjectRepository _subjectRepository;
    private readonly IUserRepository _userRepository;
    public FinalGradeService(IFinalGradeRepository repository, ICssRepository cssRepository, ISubjectRepository subjectRepository, IUserRepository userRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _cssRepository = cssRepository;
        _userRepository = userRepository;
        _subjectRepository = subjectRepository;
    }

    public override void Validate(FinalGradeDto entity)
    {
        return;
    }

    public override async Task<bool> Authorize(FinalGradeDto entity)
    {
        var cssId = entity.ClassSubjectSemesterId;
        var studentId = entity.StudentId;
        var student = await _userRepository.GetById(studentId);
        if (student == null)
        {
            throw new ObjectNotFoundException<User>(studentId);
        }
        var css = await _cssRepository.GetById(cssId);
        if (css == null)
        {
            throw new ObjectNotFoundException<ClassSubjectSemester>(cssId);
        }
        var subject = await _subjectRepository.GetById(css.SubjectId);
        if (subject == null)
        {
            throw new ObjectNotFoundException<Subject>(css.SubjectId);
        }

        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }

        if (((Student)user).ClassId != css.ClassId)
        {
            throw new NotAuthorizedException<ClassSubjectSemester>("You are not authorized to do this action");
        }
        
        if (((Teacher)user).Id != subject.TeacherId)
        {
            throw new NotAuthorizedException<ClassSubjectSemester>("You are not authorized to do this action");
        }

        return true;
    }
}