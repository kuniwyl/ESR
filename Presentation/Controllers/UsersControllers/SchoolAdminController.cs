using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/school-admins")]
public class SchoolAdminController: UserController<SchoolAdminDto, SchoolAdmin>
{
    private new ISchoolAdminService Service => (ISchoolAdminService) _service;
    
    public SchoolAdminController(IHttpContextAccessor contextAccessor, ISchoolAdminService service) : base(contextAccessor, service)
    {
    }
}