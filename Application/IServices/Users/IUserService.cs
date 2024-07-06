using Application.Dto.Users;
using Domain;
using Domain.Entities_v2.Users;
using Domain.Models;

namespace Application.IServices.Users;

public interface IUserService<TDto, TEntity> : IBaseService<TDto, TEntity>
    where TDto : class
    where TEntity : class, IEntityBase
{
    Task<ServiceResponse<TDto>> Add(CreateUserDto entity);
}    