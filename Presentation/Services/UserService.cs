using Application.DB.DataContext;
using Application.IServices;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Services;

public class UserService : IUserService
{
    private readonly SchoolContext _context;
    
    public UserService(SchoolContext context)
    {
        _context = context;
    }
    
    public async Task<bool> IsUserExist(string login)
    {
        var student = await _context.Students.AnyAsync(u => u.Login == login);
        var teacher = await _context.Teachers.AnyAsync(u => u.Login == login);
        var schoolAdmin = await _context.SchoolAdmins.AnyAsync(u => u.Login == login);
        var systemAdmin = await _context.SystemAdmins.AnyAsync(u => u.Login == login);
        var parent = await _context.Parents.AnyAsync(u => u.Login == login);
        if (student || teacher || schoolAdmin || systemAdmin || parent)
        {
            return true;
        }
        return false;
    }

    public async Task<IUser?> GetUser(string login)
    {
        var student = await _context.Students.FirstOrDefaultAsync(u => u.Login == login);
        if (student != null)
        {
            return student;
        }
        var teacher = await _context.Teachers.FirstOrDefaultAsync(u => u.Login == login);
        if (teacher != null)
        {
            return teacher;
        }
        var schoolAdmin = await _context.SchoolAdmins.FirstOrDefaultAsync(u => u.Login == login);
        if (schoolAdmin != null)
        {
            return schoolAdmin;
        }
        var systemAdmin = await _context.SystemAdmins.FirstOrDefaultAsync(u => u.Login == login);
        if (systemAdmin != null)
        {
            return systemAdmin;
        }
        var parent = await _context.Parents.FirstOrDefaultAsync(u => u.Login == login);
        if (parent != null)
        {
            return parent;
        }
        return null;
    }
    
    public async Task<IUser?> GetUserByRefreshToken(string refreshToken)
    {
        var student = await _context.Students.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        if (student != null)
        {
            return student;
        }
        var teacher = await _context.Teachers.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        if (teacher != null)
        {
            return teacher;
        }
        var schoolAdmin = await _context.SchoolAdmins.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        if (schoolAdmin != null)
        {
            return schoolAdmin;
        }
        var systemAdmin = await _context.SystemAdmins.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        if (systemAdmin != null)
        {
            return systemAdmin;
        }
        var parent = await _context.Parents.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        if (parent != null)
        {
            return parent;
        }
        return null;
    }
}