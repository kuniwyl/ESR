using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface ISubjectService: IBaseService<SubjectDto, Subject>
{
    Task<ServiceResponse<SubjectDto[]>> GetSubjectBySchool(int schoolId);
}