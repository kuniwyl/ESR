using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/schools")]
public class SchoolController: BaseController<SchoolDto, School>
{
    private ISchoolService Service => (ISchoolService) _service;
    
    public SchoolController(IHttpContextAccessor contextAccessor, ISchoolService service) : base(contextAccessor, service)
    {
    }
    
}