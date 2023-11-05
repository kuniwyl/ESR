using Application.Dto;

namespace Application.IServices;

public interface IStudentService
{
    Task<List<UserShortDto>> GetStudentsFromSchool(int schoolId);
    Task<UserDto?> GetStudentFromSchool(int schoolId, int id);
    Task<UserDto?> AddStudentToSchool(int schoolId, RegisterDto userDto);
    Task<UserDto?> UpdateStudentFromSchool(int schoolId, int id, RegisterDto userDto);
    Task<bool> DeleteStudentFromSchool(int schoolId, int id);
}