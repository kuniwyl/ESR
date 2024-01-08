using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/parents")]
public class ParentController: UserController<ParentDto, Parent>
{
    private new IParentService Service => (IParentService) _service;
    
    public ParentController(IHttpContextAccessor contextAccessor, IParentService service) : base(contextAccessor, service)
    {
    }

    [HttpGet("class/{classId}")]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher)]
    public async Task<IActionResult> GetParentsFromClass(int classId)
    {
        var result = await Service.GetParentsFromClass(classId);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher)]
    public new Task<IActionResult> GetById(int id)
    {
        return base.GetById(id);
    }


    [HttpPost]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public async Task<IActionResult> Create(CreateParentDto dto)
    {
        var result = await Service.Add(dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new async Task<IActionResult> Update(int id, ParentDto dto)
    {
        var result = await Service.Update(id, dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Delete(int id)
    {
        return base.Delete(id);
    }
}