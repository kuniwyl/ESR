using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/system-admins")]
public class SystemAdminController: UserController<SystemAdminDto, SystemAdmin>
{
    private new ISystemAdminService Service => (ISystemAdminService) _service;
    
    public SystemAdminController(IHttpContextAccessor contextAccessor, ISystemAdminService service) : base(contextAccessor, service)
    {
    }
}