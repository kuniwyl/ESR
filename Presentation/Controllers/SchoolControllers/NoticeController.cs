using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
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
}