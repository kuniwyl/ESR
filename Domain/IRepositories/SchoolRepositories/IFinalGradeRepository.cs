using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface IFinalGradeRepository: IRepository<FinalGrade>
{
    Task<List<FinalGrade>> GetFinalGradesByCss(int id);
}