using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/students")]
public class StudentController: UserController<StudentDto, Student>
{
    private new IStudentService Service => (IStudentService) _service;
    
    public StudentController(IHttpContextAccessor contextAccessor, IStudentService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet("class/{classId}")]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher)]
    public async Task<IActionResult> GetStudentsFromClass(int classId)
    {
        var result = await Service.GetStudentsFromClass(classId);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetSubjects()
    {
        var result = await Service.GetSubjects();
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher)]
    public new async Task<IActionResult> GetById(int id)
    {
        return await base.GetById(id);
    }

    [HttpPost]
    [Authorize(Roles = $"{UserRole.SchoolAdmin}")]
    public async Task<IActionResult> Create(CreateStudentDto dto)
    {
        var result = await Service.Create(dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new async Task<IActionResult> Update(int id, StudentDto dto)
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