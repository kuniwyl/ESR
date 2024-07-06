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
[Route("api/classes")]
public class ClassController: BaseController<ClassDto, Class>
{
    private IClassService Service => (IClassService) _service;
    
    public ClassController(IHttpContextAccessor contextAccessor, IClassService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet]
    [Authorize(Roles = UserRole.SchoolAdmin + ", " + UserRole.Teacher )]
    public async Task<IActionResult> GetClassesBySchool()
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var result = await Service.GetClassesFromSchool(schoolId);
        return Ok(result);
    }

    [HttpGet("{id}")]
    [Authorize(Roles = ($"{UserRole.SchoolAdmin}, {UserRole.Teacher}"))]
    public new async Task<IActionResult> GetClassById(int id)
    {
        return await base.GetById(id);
    }

    [HttpPost]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new async Task<IActionResult> Create(ClassDto dto)
    {
        return await base.Create(dto);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new async Task<IActionResult> Update(int id, ClassDto dto)
    {
        return await base.Update(id, dto);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = UserRole.SchoolAdmin)]
    public new async Task<IActionResult> Delete(int id)
    {
        return await base.Delete(id);
    }
}