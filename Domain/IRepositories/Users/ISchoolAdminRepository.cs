using Domain.Entities_v2.Users;

namespace Domain.IRepositories.Users;

public interface ISchoolAdminRepository: IRepository<SchoolAdmin>
{
    Task<SchoolAdmin[]> GetFromSchools(int schoolId);
}