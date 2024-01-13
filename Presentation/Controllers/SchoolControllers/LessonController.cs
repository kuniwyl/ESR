using Application.Dto.School;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/lessons")]
public class LessonController: BaseController<LessonDto, Lesson>
{
    public LessonController(IHttpContextAccessor contextAccessor, ILessonService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetLessonByCssId(int id)
    {
        var result = await ((ILessonService) _service).GetLessonByCssId(id);
        return Ok(result);
    }
    
    [HttpPost]
    public new async Task<IActionResult> Create(LessonDto entity)
    {
        return await base.Create(entity);
    }
    
    [HttpPut("{id}")]
    public new async Task<IActionResult> Update(int id, LessonDto entity)
    {
        return await base.Update(id, entity);
    }
    
    [HttpDelete("{id}")]
    public new async Task<IActionResult> Delete(int id)
    {
        return await base.Delete(id);
    }
}