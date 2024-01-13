using Application.Dto;
using Application.Dto.School;
using Application.Dto.Users;
using Domain.Entities_v2.Users;
using Domain.Models;

namespace Application.IServices.Users;

public interface IStudentService : IUserService<StudentDto, Student>
{
    Task<ServiceResponse<StudentDto>> Create(CreateStudentDto dto);
    Task<ServiceResponse<StudentDto[]>> GetStudentsFromClass(int classId);
    Task<ServiceResponse<StudentDto>> Update(int id, StudentDto entity);
    Task<ServiceResponse<UserSubjects>> GetSubjects();
}