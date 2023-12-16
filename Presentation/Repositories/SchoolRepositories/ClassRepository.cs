using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class ClassRepository: RepositoryBase<Class>, IClassRepository
{
    public ClassRepository(SchoolContext context) : base(context)
    {
    }
}