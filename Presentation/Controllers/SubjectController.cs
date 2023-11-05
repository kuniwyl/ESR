using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/subjects")]
public class SubjectController: ControllerBase
{
    private readonly ISubjectService _subjectService;
    private readonly IHttpContextAccessor _contextAccessor;
    
    public SubjectController(ISubjectService subjectService, IHttpContextAccessor contextAccessor)
    {
        _subjectService = subjectService;
        _contextAccessor = contextAccessor;
    }
    
    [HttpGet]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<IEnumerable<SubjectDto>>> GetSubjects()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var subjects = await _subjectService.GetSubjects(schoolId);
        return Ok(subjects);
    }
    
    [HttpGet("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<SubjectDto>> GetSubject(int id)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var subject = await _subjectService.GetSubject(schoolId, id);
        if (subject == null)
        {
            return BadRequest("Subject not found");
        }
        return Ok(subject);
    }
    
    [HttpPost]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<SubjectDto>> AddSubject(SubjectDto subjectDto)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var subject = await _subjectService.AddSubject(schoolId, subjectDto);
        if (subject == null)
        {
            return BadRequest("Subject not added");
        }
        return Ok(subject);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<SubjectDto>> UpdateSubject(int id, SubjectDto subjectDto)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var subject = await _subjectService.UpdateSubject(schoolId, id, subjectDto);
        if (subject == null)
        {
            return BadRequest("Subject not updated");
        }
        return Ok(subject);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<bool>> DeleteSubject(int id)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var deleted = await _subjectService.DeleteSubject(schoolId, id);
        if (!deleted)
        {
            return BadRequest("Subject not deleted");
        }
        return Ok(deleted);
    }
    
    [HttpGet("{id}/students")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<IEnumerable<UserShortDto>>> GetStudentsFromSubject(int id)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var students = await _subjectService.GetStudentsFromSubject(schoolId, id);
        return Ok(students);
    }
    
    [HttpPost("{id}/students/{studentId}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<bool>> AddStudentToSubject(int id, int studentId)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var added = await _subjectService.AddStudentToSubject(schoolId, id, studentId);
        if (!added)
        {
            return BadRequest("Student not added to subject");
        }
        return Ok(added);
    }
    
    [HttpDelete("{id}/students/{studentId}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<bool>> RemoveStudentFromSubject(int id, int studentId)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var removed = await _subjectService.RemoveStudentFromSubject(schoolId, id, studentId);
        if (!removed)
        {
            return BadRequest("Student not removed from subject");
        }
        return Ok(removed);
    }
}