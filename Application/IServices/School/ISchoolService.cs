using Application.Dto.School;
using Domain.Models;

namespace Application.IServices.School;

public interface ISchoolService: IBaseService<SchoolDto, Domain.Entities_v2.School.School>
{
    Task<ServiceResponse<SchoolWithAdminsDto>> GetSchoolWithAdmins(int id);
}