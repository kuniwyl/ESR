using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class AssignmentRepository: RepositoryBase<Assignment>, IAssignmentRepository
{
    public AssignmentRepository(SchoolContext context) : base(context)
    {
    }
}