using System.Security.Authentication;
using Application.Dto.School;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class SemesterService: BaseService<SemesterDto, Semester>, ISemesterService
{
    public SemesterService(ISemesterRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public async Task<ServiceResponse<SemesterDto[]>> GetSemestersBySchool(int schoolId)
    {
        var semesters = await ((ISemesterRepository) _repository).GetSemestersBySchoolId(schoolId);
        var semestersDto = _mapper.Map<SemesterDto[]>(semesters);
        return new ServiceResponse<SemesterDto[]>
        {
            Data = semestersDto,
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<SemesterDto>> GetCurrentSemester(int schoolId)
    {
        var semester = await ((ISemesterRepository) _repository).GetSemesterCurrentSemester(schoolId);
        var semesterDto = _mapper.Map<SemesterDto>(semester);
        return new ServiceResponse<SemesterDto>
        {
            Data = semesterDto,
            Message = "",
            Success = true
        };
    }


    public override async void Validate(SemesterDto entity)
    {
        var isExist = await _repository.Exists(entity.Id);
        var isName = ValidatorUtil.ValidateText(entity.Name, 3, 50, RegexExpression.PolishLettersSpacesNumbers);
        var isDailyLessonCount = ValidatorUtil.ValidateIsIntegerBetween(entity.DailyLessonCount, 1, 14);
        var isLessonDuration = ValidatorUtil.ValidateIsIntegerBetween(entity.LessonDuration, 30, 60);
        var isBreakDuration = ValidatorUtil.ValidateIsIntegerBetween(entity.BreakDuration, 5, 30);
        var isLessonStart = ValidatorUtil.ValidateText(entity.LessonStart, 0, 4, "[0-9]{1,2}:[0-9]{1,2}");
        var isSchoolId = await _existRepository.IsSchoolExist(entity.SchoolId);
        
        // if (isExist) throw new ValidationException<SemesterDto>("Semester with this id already exists");
        // if (!isName) throw new ValidationException<SemesterDto>("Semester name is invalid");
        // if (!isDailyLessonCount) throw new ValidationException<SemesterDto>("Semester daily lesson count is invalid");
        // if (!isLessonDuration) throw new ValidationException<SemesterDto>("Semester lesson duration is invalid");
        // if (!isBreakDuration) throw new ValidationException<SemesterDto>("Semester break duration is invalid");
        // if (!isLessonStart) throw new ValidationException<SemesterDto>("Semester lesson start is invalid");
        // if (!isSchoolId) throw new ValidationException<SemesterDto>("Semester school id is invalid");
    }

    public async override Task<bool> Authorize(SemesterDto entity)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        if (entity.SchoolId != schoolId) throw new AuthenticationException("You are not authorized to perform this action");
        return true;
    }
}