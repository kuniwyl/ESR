using Application.Dto.Users;
using Application.IServices;
using Application.IServices.Users;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

public abstract class UserController<TDto, TEntity> : BaseController<TDto, TEntity> where TDto : class where TEntity : class, IEntityBase
{
    protected IUserService<TDto, TEntity> Service => (IUserService<TDto, TEntity>) _service;
    
    public UserController(IHttpContextAccessor contextAccessor, IBaseService<TDto, TEntity> service) : base(contextAccessor, service)
    {
    }
    
    [HttpPost("create")]
    public async Task<IActionResult> Create(CreateUserDto dto)
    {
        var result = await Service.Add(dto);
        return Ok(result);
    }
}