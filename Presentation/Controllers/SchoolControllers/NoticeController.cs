using Application.Dto.School;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/notices")]
public class NoticeController: BaseController<NoticeDto, Notice>
{
    private INoticeService Service => (INoticeService) _service;
    
    public NoticeController(IHttpContextAccessor contextAccessor, INoticeService service) : base(contextAccessor, service)
    {
    }
    
    [HttpGet("semester/{semesterId}")]
    [Authorize]
    public async Task<IActionResult> GetNotices(int semesterId)
    {
        var notices = await Service.GetNoticesFromSchoolAndSemester(semesterId);
        return Ok(notices);
    }

    [HttpGet("user/semester/{semesterId}")]
    [Authorize]
    public async Task<IActionResult> GetNoticesForUser(int semesterId)
    {
        var notices = await Service.GetNoticesFromUserAndSemester(semesterId);
        return Ok(notices);
    }
    
    [HttpGet("user/semester/{semesterId}/fromDate/{fromDate}/toDate/{toDate}")]
    [Authorize]
    public async Task<IActionResult> GetNoticesForUser(int semesterId, DateTime fromDate, DateTime toDate)
    {
        var notices = await Service.GetNoticesFromSemesterBetweenDatesByUser(semesterId, fromDate, toDate);
        return Ok(notices);
    }
    
    [HttpGet("semester/{semesterId}/fromDate/{fromDate}/toDate/{toDate}")]
    [Authorize]
    public async Task<IActionResult> GetNotices(int semesterId, DateTime fromDate, DateTime toDate)
    {
        var notices = await Service.GetNoticesFromSemesterBetweenDates(semesterId, fromDate, toDate);
        return Ok(notices);
    }
    
    [HttpPost]
    [Authorize(Roles = UserRole.Teacher)]
    public new async Task<IActionResult> Create(NoticeDto entity)
    {
        return await base.Create(entity);
    }
    
    [HttpPut("{id}")]
    [Authorize(Roles = UserRole.Teacher)]
    public new async Task<IActionResult> Update(int id, NoticeDto entity)
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
