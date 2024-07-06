using Domain.Entities_v2.Users;

namespace Domain.IRepositories.Users;

public interface ITeacherRepository: IRepository<Teacher>
{
    Task<Teacher[]> GetTeachersFromSchool(int schoolId);
    Task<bool> IsTeacherInSchool(int entityId, int schoolId);
}