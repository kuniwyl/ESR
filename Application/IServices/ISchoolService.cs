using Application.Dto;

namespace Application.IServices;

public interface ISchoolService
{
    Task<IEnumerable<SchoolDto>> GetSchools();
    Task<SchoolDto?> GetSchool(int id);
    Task<SchoolDto?> AddSchool(ModifySchoolDto schoolDto);
    Task<SchoolDto?> UpdateSchool(ModifySchoolDto schoolDto);
    Task<bool> DeleteSchool(int id);
    Task<UserDto?> AddSchoolAdmin(int schoolId, RegisterDto registerDto);
    Task<UserDto?> UpdateSchoolAdmin(int schoolId, int id, UserDto userDto);
    Task<bool> DeleteSchoolAdmin(int schoolId, int id);
}