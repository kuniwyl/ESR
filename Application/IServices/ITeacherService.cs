using Application.Dto;

namespace Application.IServices;

public interface ITeacherService
{
    Task<List<UserShortDto>> GetTeachersFromSchool(int schoolId);
    Task<UserDto?> GetTeacherFromSchool(int schoolId, int id);
    Task<UserDto?> AddTeacherToSchool(int schoolId, RegisterDto userDto);
    Task<UserDto?> UpdateTeacherFromSchool(int schoolId, int id, RegisterDto userDto);
    Task<bool> DeleteTeacherFromSchool(int schoolId, int id);
}