using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/school-admins")]
[Authorize(Roles = UserRole.SystemAdmin)]
public class SchoolAdminController: UserController<SchoolAdminDto, SchoolAdmin>
{
    private new ISchoolAdminService Service => (ISchoolAdminService) _service;
    
    public SchoolAdminController(IHttpContextAccessor contextAccessor, ISchoolAdminService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet]
    public new async Task<IActionResult> GetAll()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var result = await Service.GetFromSchools(schoolId);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        }
        return Ok(result);
    }
    
    [HttpGet("{id}")]
    public new async Task<IActionResult> GetById(int id)
    {
        return await base.GetById(id);
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
    public new async Task<IActionResult> Update(int id, SchoolAdminDto dto)
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