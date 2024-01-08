using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface IAssignmentRepository: IRepository<Assignment>
{
    Task<Assignment[]?> GetByCssId(int cssId);
}