using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/students")]
public class StudentController(IStudentService studentService, IHttpContextAccessor contextAccessor)
    : ControllerBase
{
    [HttpGet]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<IEnumerable<UserShortDto>>> GetStudents()
    {
        var schoolId = contextAccessor.GetSchoolId();
        var students = await studentService.GetStudentsFromSchool(schoolId);
        return Ok(students);
    }
    
    [HttpGet("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<UserDto>> GetStudent(int id)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var student = await studentService.GetStudentFromSchool(schoolId, id);
        if (student == null)
        {
            return BadRequest("Student not found");
        }
        return Ok(student);
    }
    
    [HttpPost]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<UserDto>> CreateStudent([FromBody] RegisterDto registerDto)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var student = await studentService.AddStudentToSchool(schoolId, registerDto);
        if (student == null)
        {
            return BadRequest("Student not created");
        }
        return Ok(student);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<UserDto>> UpdateStudent(int id, [FromBody] RegisterDto updateUserDto)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var student = await studentService.UpdateStudentFromSchool(schoolId, id, updateUserDto);
        if (student == null)
        {
            return BadRequest("Student not updated");
        }
        return Ok(student);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult> DeleteStudent(int id)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var student = await studentService.DeleteStudentFromSchool(schoolId, id);
        if (student) return Ok(student);
        return BadRequest("Student not deleted");
    }
}