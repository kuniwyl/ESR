using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/teachers")]
public class TeacherController(ITeacherService teacherService, IHttpContextAccessor contextAccessor)
    : ControllerBase
{
    [HttpGet]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher, Student, Parent")]
    public async Task<ActionResult<IEnumerable<UserShortDto>>> GetTeachers()
    {
        var schoolId = contextAccessor.GetSchoolId();
        var teachers = await teacherService.GetTeachersFromSchool(schoolId);
        return Ok(teachers);
    }
    
    [HttpGet("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher, Student, Parent")]
    public async Task<ActionResult<UserDto>> GetTeacher(int id)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var teacher = await teacherService.GetTeacherFromSchool(schoolId, id);
        if (teacher == null)
        {
            return BadRequest("Teacher not found");
        }
        return Ok(teacher);
    }
    
    [HttpPost]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<UserDto>> CreateTeacher([FromBody] RegisterDto registerDto)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var teacher = await teacherService.AddTeacherToSchool(schoolId, registerDto);
        if (teacher == null)
        {
            return BadRequest("Teacher not created");
        }
        return Ok(teacher);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<UserDto>> UpdateTeacher(int id, [FromBody] RegisterDto updateUserDto)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var teacher = await teacherService.UpdateTeacherFromSchool(schoolId, id, updateUserDto);
        if (teacher == null)
        {
            return BadRequest("Teacher not updated");
        }
        return Ok(teacher);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<UserDto>> DeleteTeacher(int id)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var teacher = await teacherService.DeleteTeacherFromSchool(schoolId, id);
        if (teacher) Ok(teacher);
        return BadRequest("Teacher not deleted");
    }
}