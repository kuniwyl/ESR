using Application.DB.DataContext;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;

namespace Presentation.Repositories.UsersRepositories;

public class StudentRepository: RepositoryBase<Student>, IStudentRepository
{
    public StudentRepository(SchoolContext context) : base(context)
    {
    }
}