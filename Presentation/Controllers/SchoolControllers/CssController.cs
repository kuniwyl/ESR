using Application.Dto.School;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/css")]
public class CssController: BaseController<ClassSubjectSemesterDto, ClassSubjectSemester>
{
    public CssController(IHttpContextAccessor contextAccessor, ICssService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet("class/{classId}/semester/{semesterId}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public async Task<IActionResult> GetCssFromClass(int classId, int semesterId)
    {
        var result = await ((ICssService) _service).GetCssFromClassAndSemester(classId, semesterId);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpGet("teacher/{teacherId}/semester/{semesterId}")]
    [Authorize(Roles = UserRole.Teacher)]
    public async Task<IActionResult> GetCssFromTeacher(int teacherId, int semesterId)
    {
        var result = await ((ICssService) _service).GetCssFromTeacher(teacherId, semesterId);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpGet("user")]
    [Authorize]
    public async Task<IActionResult> GetCssFromUser()
    {
        var result = await ((ICssService) _service).GetCssFromUser();
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpGet("grades/{cssId}")]
    [Authorize(Roles = UserRole.Teacher)]
    public async Task<IActionResult> GetGradesFromCss(int cssId)
    {
        var result = await ((ICssService) _service).GetGradesFromCss(cssId);
        if (!result.Success)
        {
            return BadRequest(result);
        } 
        return Ok(result);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin + "," + UserRole.Teacher)]
    public new Task<IActionResult> GetById(int id)
    {
        return base.GetById(id);
    }
    
    [HttpPost]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Create(ClassSubjectSemesterDto dto)
    {
        return base.Create(dto);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Update(int id, ClassSubjectSemesterDto dto)
    {
        return base.Update(id, dto);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Delete(int id)
    {
        return base.Delete(id);
    }
}