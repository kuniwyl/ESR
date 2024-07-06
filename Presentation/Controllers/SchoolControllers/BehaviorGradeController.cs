using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/behavior-grades")]
public class BehaviorGradeController: BaseController<BehaviorGradeDto, BehaviorGrade>
{
    private IBehaviorGradeService Service => (IBehaviorGradeService) _service;
    
    public BehaviorGradeController(IHttpContextAccessor contextAccessor, IBehaviorGradeService service) : base(contextAccessor, service)
    {
    }
}