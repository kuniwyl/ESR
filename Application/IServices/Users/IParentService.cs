using Application.Dto;
using Application.Dto.Users;
using Domain.Entities_v2.Users;
using Domain.Models;

namespace Application.IServices.Users;

public interface IParentService : IUserService<ParentDto, Parent>
{
    Task<ServiceResponse<ParentDto[]>> GetParentsFromClass(int classId);
    Task<ServiceResponse<ParentDto>> Add(CreateParentDto entity);
    Task<ServiceResponse<ParentDto>> Update(int id, ParentDto entity);
}