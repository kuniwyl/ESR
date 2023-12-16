using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/semesters")]
public class SemesterController: BaseController<SemesterDto, Semester>
{
    private ISemesterService Service => (ISemesterService) _service;
    
    public SemesterController(IHttpContextAccessor contextAccessor, ISemesterService service) : base(contextAccessor, service)
    {
    }
}