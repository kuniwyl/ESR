using Application.DB.DataContext;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
using Domain.IRepositories.Users;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.UsersRepositories;

public class UserRepository: IUserRepository
{
    private readonly SchoolContext _context;
    
    public UserRepository(SchoolContext context)
    {
        _context = context;
    }

    public async Task<bool> IsLoginExist(string login)
    {
        var res = await _context.Users.FirstOrDefaultAsync(u => u.Login == login);
        return res != null;
    }

    public async Task<User> GetByLogin(string login)
    {
        var res = await _context.Users.FirstOrDefaultAsync(u => u.Login == login);
        if (res == null)
        {
            throw new UserNotFound(login);
        }
        return res;
    }

    public async Task<User> GetByRefreshToken(string refreshToken)
    {
        var res = await _context.Users.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        if (res == null)
        {
            throw new UserNotFound(refreshToken);
        }
        return res;
    }
}