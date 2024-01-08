using Application.Dto.School;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class ClassService: BaseService<ClassDto, Class>, IClassService
{
    public ClassService(IClassRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }
 
    public async Task<ServiceResponse<ClassDto[]>> GetClassesFromSchool(int schoolId)
    {
        var classes = await ((IClassRepository) _repository).GetClassesFromSchool(schoolId);
        var mapped = _mapper.Map<ClassDto[]>(classes);
        return new ServiceResponse<ClassDto[]>
        {
            Data = mapped,
            Message = "",
            Success = true
        };
    }
    
    public override async void Validate(ClassDto entity)
    {
        var isExist = await _repository.Exists(entity.Id);
        var isName = ValidatorUtil.ValidateText(entity.Name, 3, 50, RegexExpression.PolishLettersRegex);
        var isDescription = ValidatorUtil.ValidateText(entity.Description, 3, 150, RegexExpression.PolishLettersWithNumbersRegex);
        var isNameId = ValidatorUtil.ValidateText(entity.NameId, 3, 50, "[A-Z]{1}[0-9]{1}");
        var isSchoolId = await _existRepository.IsSchoolExist(entity.SchoolId);
        var isTeacherId = await _existRepository.IsTeacherExist(entity.TeacherId);
        
        // if (isExist) throw new ValidationException<ClassDto>("Class with this id already exists");
        // if (!isName) throw new ValidationException<ClassDto>("Class name is invalid");
        // if (!isSchoolId) throw new ValidationException<ClassDto>("Class school id is invalid");
        // if (!isTeacherId) throw new ValidationException<ClassDto>("Class teacher id is invalid");
        // if (!isNameId) throw new ValidationException<ClassDto>("Class name id is invalid");
    }

    public override async Task<bool> Authorize(ClassDto entity)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        return entity.SchoolId == schoolId;
    }
}