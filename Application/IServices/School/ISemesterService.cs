using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface ISemesterService: IBaseService<SemesterDto, Semester>
{
    Task<ServiceResponse<SemesterDto[]>> GetSemestersBySchool(int schoolId);
    Task<ServiceResponse<SemesterDto>> GetCurrentSemester(int schoolId);
}