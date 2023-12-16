using Application.Dto;
using Application.Dto.Users;
using Domain.Entities_v2.Users;

namespace Application.IServices.Users;

public interface ISchoolAdminService : IUserService<SchoolAdminDto, SchoolAdmin>
{
}