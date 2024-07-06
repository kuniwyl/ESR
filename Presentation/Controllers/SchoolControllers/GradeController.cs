using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/grades")]
public class GradeController: BaseController<GradeDto, Grade>
{
    private IGradeService Service => (IGradeService) _service;
    
    public GradeController(IHttpContextAccessor contextAccessor, IGradeService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet("css/{id}")]
    [Authorize]
    public async Task<IActionResult> GetGradesByCssId(int id)
    {
        return Ok(await Service.GetGradesByGradeId(id));
    }
    
    [HttpPost]
    [Authorize(Roles = UserRole.Teacher)]
    public new async Task<IActionResult> Create(GradeDto entity)
    {
        return await base.Create(entity);
    } 
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.Teacher)]
    public new async Task<IActionResult> Update(int id, GradeDto entity)
    {
        return await base.Update(id, entity);
    }
    
    [HttpDelete("{id}")]
    [Authorize(Roles = UserRole.Teacher)]
    public new async Task<IActionResult> Delete(int id)
    {
        return await base.Delete(id);
    }
}