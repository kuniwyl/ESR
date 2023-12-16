using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/teachers")]
public class TeacherController: UserController<TeacherDto, Teacher>
{
    protected new ITeacherService Service => (ITeacherService) _service;
    
    public TeacherController(IHttpContextAccessor contextAccessor, ITeacherService service) : base(contextAccessor, service)
    {
    }
}