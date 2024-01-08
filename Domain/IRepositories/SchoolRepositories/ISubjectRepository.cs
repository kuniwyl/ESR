using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface ISubjectRepository: IRepository<Subject>
{
    Task<Subject[]> GetSubjectsBySchool(int schoolId);
}