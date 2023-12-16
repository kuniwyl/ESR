using Application.DB.DataContext;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;

namespace Presentation.Repositories.UsersRepositories;

public class SystemAdminRepository: RepositoryBase<SystemAdmin>, ISystemAdminRepository
{
    public SystemAdminRepository(SchoolContext context) : base(context)
    {
    }
}