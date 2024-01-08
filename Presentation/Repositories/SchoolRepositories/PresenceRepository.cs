using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class PresenceRepository: RepositoryBase<Presence>, IPresenceRepository
{
    public PresenceRepository(SchoolContext context) : base(context)
    {
    }
}