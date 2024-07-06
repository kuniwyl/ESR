using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface IClassRepository: IRepository<Class>
{
    Task<Class[]> GetClassesFromSchool(int schoolId);
}