using Application.Dto.Users;
using Application.IServices;
using Application.IServices.Users;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/parents")]
public class ParentController: UserController<ParentDto, Parent>
{
    private new IParentService Service => (IParentService) _service;
    
    public ParentController(IHttpContextAccessor contextAccessor, IParentService service) : base(contextAccessor, service)
    {
    }
    
}