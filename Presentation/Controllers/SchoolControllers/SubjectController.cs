using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.CompilerServices;
using Presentation.Utils;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/subjects")]
public class SubjectController: BaseController<SubjectDto, Subject>
{
    private ISubjectService Service => (ISubjectService) _service;
    
    public SubjectController(IHttpContextAccessor contextAccessor, ISubjectService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher)]
    public async Task<IActionResult> GetSubjectsBySchool()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var result = await Service.GetSubjectBySchool(schoolId);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    [HttpGet("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher)]
    public Task<IActionResult> GetSubjectById(int id)
    {
        return base.GetById(id);
    }
    
    [HttpPost]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Create(SubjectDto dto)
    {
        return base.Create(dto);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new Task<IActionResult> Update(int id, SubjectDto dto)
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