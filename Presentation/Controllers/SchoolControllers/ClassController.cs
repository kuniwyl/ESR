using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/classes")]
public class ClassController: BaseController<ClassDto, Class>
{
    private IClassService Service => (IClassService) _service;
    
    public ClassController(IHttpContextAccessor contextAccessor, IClassService service) : base(contextAccessor, service)
    {
    }
}