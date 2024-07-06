using System.Security.Authentication;
using Application.Dto.School;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class SubjectService: BaseService<SubjectDto, Subject>, ISubjectService
{
    private readonly IUserRepository _userRepository;
    private readonly ISemesterRepository _semesterRepository;
    
    public SubjectService(ISubjectRepository repository, ISemesterRepository semesterRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor, IUserRepository userRepository) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
        _semesterRepository = semesterRepository;
    }
 
    public async Task<ServiceResponse<SubjectDto[]>> GetSubjectBySchool(int schoolId)
    {
        var subjects = await ((ISubjectRepository) _repository).GetSubjectsBySchool(schoolId);
        var subjectsDto = _mapper.Map<SubjectDto[]>(subjects);
        return new ServiceResponse<SubjectDto[]>
        {
            Data = subjectsDto
        };
    }

    public override async void Validate(SubjectDto entity)
    {
        var isExist = await _repository.Exists(entity.Id);
        var isName = ValidatorUtil.ValidateText(entity.Name, 3, 50, RegexExpression.PolishLettersSpacesNumbers);
        var isDescription = ValidatorUtil.ValidateText(entity.Description, 3, 150, RegexExpression.PolishLettersSpacesNumbers);
        var isSchoolId = await _existRepository.IsSchoolExist(entity.SchoolId);
        var isTeacherId = await _existRepository.IsTeacherExist(entity.TeacherId);
        
        if (isExist) throw new ValidationException<SubjectDto>("Subject with this id already exists");
        if (!isName) throw new ValidationException<SubjectDto>("Subject name is invalid");
        if (!isDescription) throw new ValidationException<SubjectDto>("Subject description is invalid");
        if (!isSchoolId) throw new ValidationException<SubjectDto>("Subject school id is invalid");
        if (!isTeacherId) throw new ValidationException<SubjectDto>("Subject teacher id is invalid");
    }

    public async override Task<bool> Authorize(SubjectDto entity)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        if (schoolId != entity.SchoolId) throw new AuthenticationException("You are not authorized to this school");
        return true;
    }
}