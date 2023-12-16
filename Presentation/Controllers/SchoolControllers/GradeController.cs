using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/grades")]
public class GradeController: BaseController<GradeDto, Grade>
{
    private IGradeService Service => (IGradeService) _service;
    
    public GradeController(IHttpContextAccessor contextAccessor, IGradeService service) : base(contextAccessor, service)
    {
    }
    
}