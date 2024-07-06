using Application.Dto;
using Application.Dto.Users;
using Domain.Entities_v2.Users;
using Domain.Models;

namespace Application.IServices.Users;

public interface ISchoolAdminService : IUserService<SchoolAdminDto, SchoolAdmin>
{
    Task<ServiceResponse<SchoolAdminDto>> Update(int id, SchoolAdminDto entity);
    Task<ServiceResponse<SchoolAdminDto[]>> GetFromSchools(int schoolId);
}