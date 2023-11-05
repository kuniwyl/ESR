using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/classes")]
public class ClassController: ControllerBase
{
    private readonly IClassService _classService;
    private readonly IHttpContextAccessor _contextAccessor;
    
    public ClassController(IClassService classService, IHttpContextAccessor contextAccessor)
    {
        _classService = classService;
        _contextAccessor = contextAccessor;
    }
    
    [HttpGet]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<IEnumerable<ClassDto>>> GetClasses()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var classes = await _classService.GetClasses(schoolId);
        return Ok(classes);
    }
    
    [HttpGet("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<ClassDto>> GetClass(int id)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var classDto = await _classService.GetClass(schoolId, id);
        if (classDto == null)
        {
            return BadRequest("Class not found");
        }
        return Ok(classDto);
    }
    
    [HttpPost]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<ClassDto>> AddClass(ClassDto classDto)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var classDto1 = await _classService.AddClass(schoolId, classDto);
        if (classDto1 == null)
        {
            return BadRequest("Class not added");
        }
        return Ok(classDto1);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<ClassDto>> UpdateClass(int id, ClassDto classDto)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var classDto1 = await _classService.UpdateClass(schoolId, id, classDto);
        if (classDto1 == null)
        {
            return BadRequest("Class not updated");
        }
        return Ok(classDto1);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<bool>> DeleteClass(int id)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var deleted = await _classService.DeleteClass(schoolId, id);
        if (!deleted)
        {
            return BadRequest("Class not deleted");
        }
        return Ok(deleted);
    }
    
    [HttpGet("{classId}/students")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<IEnumerable<UserShortDto>>> GetStudentsFromClass(int classId)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var students = await _classService.GetStudentsFromClass(schoolId, classId);
        return Ok(students);
    }
    
    [HttpPost("{classId}/students/{studentId}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<bool>> AddStudentToClass(int classId, int studentId)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var added = await _classService.AddStudentToClass(schoolId, classId, studentId);
        if (!added)
        {
            return BadRequest("Student not added to class");
        }
        return Ok(added);
    }
    
    [HttpDelete("{classId}/students/{studentId}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<bool>> RemoveStudentFromClass(int classId, int studentId)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var removed = await _classService.RemoveStudentFromClass(schoolId, classId, studentId);
        if (!removed)
        {
            return BadRequest("Student not removed from class");
        }
        return Ok(removed);
    }
}