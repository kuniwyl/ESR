using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class SchoolRepository: RepositoryBase<School>, ISchoolRepository
{
    public SchoolRepository(SchoolContext context) : base(context)
    {
    }
}