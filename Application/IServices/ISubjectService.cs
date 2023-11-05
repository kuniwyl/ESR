using Application.Dto;

namespace Application.IServices;

public interface ISubjectService
{
    Task<List<SubjectDto>> GetSubjects(int schoolId);
    Task<SubjectDto?> GetSubject(int schoolId, int id);
    Task<SubjectDto?> AddSubject(int schoolId, SubjectDto subjectDto);
    Task<SubjectDto?> UpdateSubject(int schoolId, int id, SubjectDto subjectDto);
    Task<bool> DeleteSubject(int schoolId, int id);
    
    Task<List<UserShortDto>> GetStudentsFromSubject(int schoolId, int subjectId);
    Task<bool> AddStudentToSubject(int schoolId, int subjectId, int studentId);
    Task<bool> RemoveStudentFromSubject(int schoolId, int subjectId, int studentId);
}