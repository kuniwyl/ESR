using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/parents")]
public class ParentController(IParentService parentService, IHttpContextAccessor contextAccessor)
    : ControllerBase
{
    [HttpGet]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<IEnumerable<ParentDto>>> GetParents()
    {
        var schoolId = contextAccessor.GetSchoolId();
        var parents = await parentService.GetParentsFromSchool(schoolId);
        return Ok(parents);
    }
    
    [HttpGet("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin, Teacher")]
    public async Task<ActionResult<ParentDto>> GetParent(int id)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var parent = await parentService.GetParentFromSchool(schoolId, id);
        if (parent == null)
        {
            return BadRequest("Parent not found");
        }
        return Ok(parent);
    }
    
    [HttpPost("student/{studentId}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<ParentDto>> CreateParent(int studentId, [FromBody] RegisterDto registerDto)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var parent = await parentService.AddParentToSchool(schoolId, studentId, registerDto);
        if (parent == null)
        {
            return BadRequest("Parent not created");
        }
        return Ok(parent);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<ParentDto>> UpdateParent(int id, [FromBody] RegisterDto updateUserDto)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var parent = await parentService.UpdateParentFromSchool(schoolId, id, updateUserDto);
        if (parent == null)
        {
            return BadRequest("Parent not updated");
        }
        return Ok(parent);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = "SystemAdmin, SchoolAdmin")]
    public async Task<ActionResult<ParentDto>> DeleteParent(int id)
    {
        var schoolId = contextAccessor.GetSchoolId();
        var parent = await parentService.DeleteParentFromSchool(schoolId, id);
        if (parent) Ok(parent);
        return BadRequest("Parent not deleted");
    }
}