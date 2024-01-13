using System.Collections;
using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface ICssRepository: IRepository<ClassSubjectSemester>
{
    Task<ClassSubjectSemester[]> GetCssFromClassAndSemester(int classId, int semesterId);
    Task<ClassSubjectSemester[]> GetCssFromTeacher(int teacherId, int semesterId);
    Task<ClassSubjectSemester> GetGradesFromCss(int cssId);
}