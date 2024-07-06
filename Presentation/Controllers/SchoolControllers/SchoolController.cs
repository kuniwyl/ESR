using Application.Dto.School;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/schools")]
[Authorize(Roles = UserRole.SystemAdmin)]
public class SchoolController : BaseController<SchoolDto, School>
{
    private ISchoolService Service => (ISchoolService)_service;

    public SchoolController(IHttpContextAccessor contextAccessor, ISchoolService service) : base(contextAccessor,
        service)
    {
    }

    [HttpGet("{id}/getWithAdmins")]
    public async Task<IActionResult> GetWithAdmins(int id)
    {
        var result = await Service.GetSchoolWithAdmins(id);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        }

        return Ok(result);
    }

    [HttpGet]
    public new async Task<IActionResult> GetAll()
    {
        return await base.GetAll();
    }

    [HttpGet("{id}")]
    public new Task<IActionResult> GetById(int id)
    {
        return base.GetById(id);
    }

    [HttpPost]
    public new async Task<IActionResult> Create(SchoolDto dto)
    {
        Console.WriteLine("Create school");
        var result = await Service.Add(dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        }
        return Ok(result);
    }

    [HttpPut("{id}")]
    public new Task<IActionResult> Update(int id, SchoolDto dto)
    {
        return base.Update(id, dto);
    }
    
    [HttpDelete("{id}")]
    public new Task<IActionResult> Delete(int id)
    {
        return base.Delete(id);
    }
}