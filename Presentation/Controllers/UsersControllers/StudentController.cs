using Application.Dto.Users;
using Application.IServices.Users;
using Domain.Entities_v2.Users;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.UsersControllers;

[ApiController]
[Route("api/students")]
public class StudentController: UserController<StudentDto, Student>
{
    private new IStudentService Service => (IStudentService) _service;
    
    public StudentController(IHttpContextAccessor contextAccessor, IStudentService service) : base(contextAccessor, service)
    {
    }

    [HttpPost("createWithClass")]
    public async Task<IActionResult> Create(CreateStudentDto dto)
    {
        var res = await Service.Create(dto);
        return Ok(res);
    }
}