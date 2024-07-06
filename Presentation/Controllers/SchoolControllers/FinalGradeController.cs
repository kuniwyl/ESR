using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/final-grade")]
[Authorize(Roles = UserRole.Teacher)]
public class FinalGradeController: BaseController<FinalGradeDto, FinalGrade>
{
    public FinalGradeController(IHttpContextAccessor contextAccessor, IFinalGradeService service) : base(contextAccessor, service)
    {
    }
    
    [HttpPost]
    public new async Task<IActionResult> Create(FinalGradeDto entity)
    {
        return await base.Create(entity);
    }
    
    [HttpPut("{id}")]
    public new async Task<IActionResult> Update(int id, FinalGradeDto entity)
    {
        return await base.Update(id, entity);
    }
    
    [HttpDelete("{id}")]
    public new async Task<IActionResult> Delete(int id)
    {
        return await base.Delete(id);
    }
}