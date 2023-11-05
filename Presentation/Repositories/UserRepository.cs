using Application.DB.DataContext;
using Domain.Entities;
using Domain.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories;

public class UserRepository: RepositoryBase<IUser>, IUserRepository
{
    public UserRepository(SchoolContext context) : base(context)
    {
    }
}