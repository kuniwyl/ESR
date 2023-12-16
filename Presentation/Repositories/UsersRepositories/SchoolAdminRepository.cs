using Application.DB.DataContext;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;

namespace Presentation.Repositories.UsersRepositories;

public class SchoolAdminRepository: RepositoryBase<SchoolAdmin>, ISchoolAdminRepository
{
    public SchoolAdminRepository(SchoolContext context) : base(context)
    {
    }
}