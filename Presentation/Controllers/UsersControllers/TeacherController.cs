using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/teachers")]
public class TeacherController: UserController<TeacherDto, Teacher>
{
    protected new ITeacherService Service => (ITeacherService) _service;
    
    public TeacherController(IHttpContextAccessor contextAccessor, ITeacherService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher)]
    public async Task<IActionResult> GetTeachersBySchool()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var result = await Service.GetTeachersFromSchool(schoolId);
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
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new async Task<IActionResult> Update(int id, TeacherDto dto)
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
    public new async Task<IActionResult> Delete(int id)
    {
       return await base.Delete(id);
    }
}