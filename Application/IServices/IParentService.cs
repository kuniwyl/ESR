using Application.Dto;

namespace Application.IServices;

public interface IParentService
{
    Task<List<ParentDto>> GetParentsFromSchool(int schoolId);
    Task<ParentDto?> GetParentFromSchool(int schoolId, int id);
    Task<ParentDto?> AddParentToSchool(int schoolId, int studentId, RegisterDto userDto);
    Task<ParentDto?> UpdateParentFromSchool(int schoolId, int id, RegisterDto userDto);
    Task<bool> DeleteParentFromSchool(int schoolId, int id);
}