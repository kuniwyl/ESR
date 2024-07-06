using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface IGradeRepository: IRepository<Grade>
{
    Task<Grade> GetGradesByStudentId(int semesterId, int studentId);

    Task<Grade[]> GetGradesByCss(int id);
}