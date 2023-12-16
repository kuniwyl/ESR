using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using Domain.Entities_v2.School;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.SchoolControllers;

[ApiController]
[Route("api/subjects")]
public class SubjectController: BaseController<SubjectDto, Subject>
{
    private ISubjectService Service => (ISubjectService) _service;
    
    public SubjectController(IHttpContextAccessor contextAccessor, ISubjectService service) : base(contextAccessor, service)
    {
    }
    
}