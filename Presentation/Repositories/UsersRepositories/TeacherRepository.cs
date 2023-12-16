using Application.DB.DataContext;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;

namespace Presentation.Repositories.UsersRepositories;

public class TeacherRepository: RepositoryBase<Teacher>, ITeacherRepository
{
    public TeacherRepository(SchoolContext context) : base(context)
    {
    }
}