using Application.Dto.School;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/assignments")]
public class AssignmentController: BaseController<AssignmentDto, Assignment>
{
    private IAssignmentService Service => (IAssignmentService) _service;
    
    public AssignmentController(IHttpContextAccessor contextAccessor, IAssignmentService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet("css/{cssId}")]
    public async Task<IActionResult> GetByCssId(int cssId)
    {
        var response = await Service.GetByCssId(cssId);
        return Ok(response);
    }
    
    [HttpPost]
    public new async Task<IActionResult> Create(AssignmentDto entity)
    {
        return await base.Create(entity);
    }

    [HttpPut("{id}")]
    public new async Task<IActionResult> Update(int id, AssignmentDto entity)
    {
        return await base.Update(id, entity);
    }
    
    [HttpDelete("{id}")]
    public new async Task<IActionResult> Delete(int id)
    {
        return await base.Delete(id);
    }
}