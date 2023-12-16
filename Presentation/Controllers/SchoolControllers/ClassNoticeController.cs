using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/class-notices")]
public class ClassNoticeController: BaseController<ClassNoticeDto, ClassNotice>
{
    private IClassNoticeService Service => (IClassNoticeService) _service;
    
    public ClassNoticeController(IHttpContextAccessor contextAccessor, IClassNoticeService service) : base(contextAccessor, service)
    {
    }
}