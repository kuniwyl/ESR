using Application.Dto;
using Application.Dto.Users;
using Domain.Entities_v2;
using Domain.Entities_v2.Users;
using Domain.Models;

namespace Application.IServices.Users;

public interface ISystemAdminService : IUserService<SystemAdminDto, SystemAdmin>
{
    Task<ServiceResponse<SystemAdminDto>> Update(int id, SystemAdminDto entity);
}