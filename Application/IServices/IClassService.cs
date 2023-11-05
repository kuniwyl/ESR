using Application.Dto;

namespace Application.IServices;

public interface IClassService
{
    Task<List<ClassDto>> GetClasses(int schoolId);
    Task<ClassDto?> GetClass(int schoolId, int id);
    Task<ClassDto?> AddClass(int schoolId, ClassDto classDto);
    Task<ClassDto?> UpdateClass(int schoolId, int id, ClassDto classDto);
    Task<bool> DeleteClass(int schoolId, int id);
    
    Task<List<UserShortDto>> GetStudentsFromClass(int schoolId, int classId);
    Task<bool> AddStudentToClass(int schoolId, int classId, int studentId);
    Task<bool> RemoveStudentFromClass(int schoolId, int classId, int studentId);
}