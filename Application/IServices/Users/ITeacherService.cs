using Application.Dto.Users;
using Domain.Entities_v2.Users;
using Domain.Models;

namespace Application.IServices.Users;

public interface ITeacherService : IUserService<TeacherDto, Teacher>
{
    Task<ServiceResponse<TeacherDto[]>> GetTeachersFromSchool(int schoolId);
    Task<ServiceResponse<TeacherDto>> Update(int id, TeacherDto entity);
}