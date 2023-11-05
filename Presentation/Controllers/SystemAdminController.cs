using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

[ApiController]
[Authorize(Roles = "SystemAdmin")]
[Route("/api/system-admin/schools")]
public class SystemAdminController : ControllerBase
{
    private readonly ISchoolService _schoolService;
    
    public SystemAdminController(ISchoolService schoolService)
    {
        _schoolService = schoolService;
    }
    
    [HttpGet("")]
    public async Task<ActionResult<IEnumerable<SchoolDto>>> GetSchools()
    {
        var schools = await _schoolService.GetSchools();
        return Ok(schools);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<SchoolDto>> GetSchool(int id)
    {
        var school = await _schoolService.GetSchool(id);
        if (school == null)
        {
            return BadRequest("School not found");
        }
        return Ok(school);
    }
    
    [HttpPost("")]
    public async Task<ActionResult<SchoolDto>> AddSchool(ModifySchoolDto schoolDto)
    {
        var school = await _schoolService.AddSchool(schoolDto);
        if (school == null)
        {
            return BadRequest("School already exists");
        }
        return Ok(school);
    }
    
    [HttpPut("")]
    public async Task<ActionResult<SchoolDto>> UpdateSchool(ModifySchoolDto schoolDto)
    {
        var school = await _schoolService.UpdateSchool(schoolDto);
        if (school == null)
        {
            return BadRequest("School not found");
        }
        return Ok(school);
    }
    
    [HttpDelete("{id}")]
    public async Task<ActionResult<bool>> DeleteSchool(int id)
    {
        var result = await _schoolService.DeleteSchool(id);
        if (!result)
        {
            return BadRequest("School not found");
        }
        return Ok(result);
    }
    
    [HttpPost("{id}/school-admins")]
    public async Task<ActionResult<UserDto>> AddSchoolAdmin(int id, RegisterDto registerDto)
    {
        var userDto = await _schoolService.AddSchoolAdmin(id, registerDto);
        if (userDto == null)
        {
            return BadRequest("User already exists");
        }
        return Ok(userDto);
    }
    
    [HttpPut("{id}/school-admins/{userId}")]
    public async Task<ActionResult<UserDto>> UpdateSchoolAdmin(int id, int userId, UserDto userDto)
    {
        var user = await _schoolService.UpdateSchoolAdmin(id, userId, userDto);
        if (user == null)
        {
            return BadRequest("User not updated");
        }
        return Ok(user);
    }
    
    [HttpDelete("{id}/school-admins/{userId}")]
    public async Task<ActionResult<bool>> DeleteSchoolAdmin(int id, int userId)
    {
        var result = await _schoolService.DeleteSchoolAdmin(id, userId);
        if (!result)
        {
            return BadRequest("User not found");
        }
        return Ok(result);
    }
    
}