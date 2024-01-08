using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/semesters")]
public class SemesterController: BaseController<SemesterDto, Semester>
{
    private ISemesterService Service => (ISemesterService) _service;
    
    public SemesterController(IHttpContextAccessor contextAccessor, ISemesterService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public async Task<IActionResult> GetSemestersBySchool()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var result = await Service.GetSemestersBySchool(schoolId);
        
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpGet("current")]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher + ", " + UserRole.Student + ", " + UserRole.Parent)]
    public async Task<IActionResult> GetCurrentSemesterBySchool()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var result = await Service.GetCurrentSemester(schoolId);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpGet("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public Task<IActionResult> GetSemesterById(int id)
    {
        return base.GetById(id);
    }
    
    [HttpPost]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Create(SemesterDto dto)
    {
        return base.Create(dto);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Update(int id, SemesterDto dto)
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