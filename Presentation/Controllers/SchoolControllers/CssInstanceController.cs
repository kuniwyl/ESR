using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/cssInstance")]
public class CssInstanceController: BaseController<ClassSubjectSemesterInstanceDto, ClassSubjectSemesterInstance>
{
    public CssInstanceController(IHttpContextAccessor contextAccessor, ICssInstanceService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet("semester/{semesterId}/class/{classId}")]
    public async Task<IActionResult> GetByClassId(int semesterId, int classId)
    {
        Console.WriteLine("controller get by class id and semester id");
        var result = await ((ICssInstanceService) _service).GetBySemesterIdAndClassId(semesterId, classId);
        return Ok(result);
    }
    
    [HttpGet("semester/{semesterId}/teacher/{teacherId}")]
    public async Task<IActionResult> GetByTeacherId(int semesterId, int teacherId)
    {
        var result = await ((ICssInstanceService) _service).GetBySemesterAndTeacherId(semesterId, teacherId);
        return Ok(result);
    }
    
    [HttpGet("user")]
    public async Task<IActionResult> GetByUser()
    {
        var result = await ((ICssInstanceService) _service).GetByUser();
        return Ok(result);
    }
    
    [HttpGet("{id}")]
    public new Task<IActionResult> GetById(int id)
    {
        Console.WriteLine("controller get by id");
        return base.GetById(id);
    }
    
    [HttpPost]
    public new Task<IActionResult> Create(ClassSubjectSemesterInstanceDto dto)
    {
        return base.Create(dto);
    }
    
    [HttpPut("{id}")]
    public new Task<IActionResult> Update(int id, ClassSubjectSemesterInstanceDto dto)
    {
        return base.Update(id, dto);
    }
    
    [HttpDelete("{id}")]
    public new Task<IActionResult> Delete(int id)
    {
        return base.Delete(id);
    }
    
    
}