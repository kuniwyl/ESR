using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface ISchoolRepository : IRepository<School>
{
    Task<School> GetSchoolWithAdmins(int id);
}