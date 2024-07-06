using Application.Dto.School;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/presences")]
public class PresenceController: BaseController<PresenceDto, Presence>
{
    public PresenceController(IHttpContextAccessor contextAccessor, IPresenceService service) : base(contextAccessor, service)
    {
    }
    
    [HttpPost] 
    [Authorize(Roles = UserRole.Teacher)]
    public new async Task<IActionResult> Create(PresenceDto entity)
    {
        return await base.Create(entity);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.Teacher)]
    public new async Task<IActionResult> Update(int id, PresenceDto entity)
    {
        return await base.Update(id, entity);
    }
}