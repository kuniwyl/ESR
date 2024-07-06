using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/system-admins")]
// [Authorize(Roles = UserRole.SystemAdmin)]
public class SystemAdminController: UserController<SystemAdminDto, SystemAdmin>
{
    private new ISystemAdminService Service => (ISystemAdminService) _service;
    
    public SystemAdminController(IHttpContextAccessor contextAccessor, ISystemAdminService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet]
    public new async Task<IActionResult> GetAll()
    {
        return await base.GetAll();
    }

    [HttpGet("{id}")]
    public new async Task<IActionResult> GetById(int id)
    {
        var res = await Service.Get(id);
        if (!res.Success)
        {
            return BadRequest(res.Message);
        }
        return Ok(res);
    }
    
    [HttpPost]
    public new async Task<IActionResult> Create(CreateUserDto dto)
    {
        var result = await Service.Add(dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, SystemAdminDto dto)
    {
        var result = await Service.Update(id, dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpDelete("{id}")]
    public new async Task<IActionResult> Delete(int id)
    {
       return await base.Delete(id);
    }
}