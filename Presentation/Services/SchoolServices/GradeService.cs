using Application.Dto;
using Application.Dto.School;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class GradeService: BaseService<GradeDto, Grade>, IGradeService
{
    private IFinalGradeRepository _finalGradeRepository;
    private readonly ICssRepository _cssRepository;
    private readonly ISubjectRepository _subjectRepository;
    private readonly IUserRepository _userRepository;
    
    
    public GradeService(IGradeRepository repository, IFinalGradeRepository finalGradeRepository, ICssRepository cssRepository, ISubjectRepository subjectRepository, IUserRepository userRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _finalGradeRepository = finalGradeRepository;
        _cssRepository = cssRepository;
        _userRepository = userRepository;
        _subjectRepository = subjectRepository;
    }

    public override async void Validate(GradeDto entity)
    {
        throw new NotImplementedException();
    }

    public override async Task<bool> Authorize(GradeDto entity)
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

    public async Task<ServiceResponse<GradesFinalDto>> GetGradesByGradeId(int id)
    {
        var response = new ServiceResponse<GradesFinalDto>();
        var grades = await ((IGradeRepository) _repository).GetGradesByCss(id);
        var finalGrades = await _finalGradeRepository.GetFinalGradesByCss(id);
        var gradesFinalDto = new GradesFinalDto
        {
            Grades = _mapper.Map<List<GradeDto>>(grades),
            FinalGrades = _mapper.Map<List<FinalGradeDto>>(finalGrades)
        };
        response.Data = gradesFinalDto;
        
        return response;
    }
}