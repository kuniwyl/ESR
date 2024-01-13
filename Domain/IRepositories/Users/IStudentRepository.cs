using Domain.Entities_v2.School;
using Domain.Entities_v2.Users;

namespace Domain.IRepositories.Users;

public interface IStudentRepository: IRepository<Student>
{
    Task<Student[]> GetStudentsFromClass(int classId);
    Task<Student[]> GetStudentsFromClassWithGradesFromCss(int classId, int cssId);
    Task<FinalGrade[]> GetFinalGrades(int studId, int semesterId);
    Task<Grade[]> GetGrades(int studId, int semesterId);
    Task<Presence[]> GetPresence(int studId, int semesterId);
    Task<ClassSubjectSemester[]> GetClassSubjectSemesters(int classId, int semesterId);
}