using Application.Dto.School;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/assignments")]
public class AssignmentController: BaseController<AssignmentDto, Assignment>
{
    private IAssignmentService Service => (IAssignmentService) _service;
    
    public AssignmentController(IHttpContextAccessor contextAccessor, IAssignmentService service) : base(contextAccessor, service)
    {
    }
}