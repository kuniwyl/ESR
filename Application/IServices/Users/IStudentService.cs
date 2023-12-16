using Application.Dto;
using Application.Dto.Users;
using Domain.Entities_v2.Users;

namespace Application.IServices.Users;

public interface IStudentService : IUserService<StudentDto, Student>
{
    Task<ServiceResponse<StudentDto>> Create(CreateStudentDto dto);
}