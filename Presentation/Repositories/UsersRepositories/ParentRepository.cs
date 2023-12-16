using Application.DB.DataContext;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;

namespace Presentation.Repositories.UsersRepositories;

public class ParentRepository: RepositoryBase<Parent>, IParentRepository
{
    public ParentRepository(SchoolContext context) : base(context)
    {
    }
}