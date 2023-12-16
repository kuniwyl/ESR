using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class SemesterRepository: RepositoryBase<Semester>, ISemesterRepository
{
    public SemesterRepository(SchoolContext context) : base(context)
    {
    }
}