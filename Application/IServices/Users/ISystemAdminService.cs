using Application.Dto;
using Application.Dto.Users;
using Domain.Entities_v2;
using Domain.Entities_v2.Users;

namespace Application.IServices.Users;

public interface ISystemAdminService : IUserService<SystemAdminDto, SystemAdmin>
{
}