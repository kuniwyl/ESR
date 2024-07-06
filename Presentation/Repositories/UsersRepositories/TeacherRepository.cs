using Application.DB.DataContext;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.UsersRepositories;

public class TeacherRepository: RepositoryBase<Teacher>, ITeacherRepository
{
    public TeacherRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Teacher[]> GetTeachersFromSchool(int schoolId)
    {
        var teachers = await _context.Teachers
            .Include(t => t.Address)
            .Where(t => t.SchoolId == schoolId)
            .Where(t => t.Status != Status.Deleted)
            .Where(t => t.Role == UserRole.Teacher)
            .ToArrayAsync();
        return teachers;
    }

    public async Task<bool> IsTeacherInSchool(int entityId, int schoolId)
    {
        return await _context.Teachers
            .Where(t => t.Id == entityId)
            .Where(t => t.SchoolId == schoolId)
            .Where(t => t.Status != Status.Deleted)
            .Where(t => t.Role == UserRole.Teacher)
            .AnyAsync();
    }

    public new async Task<Teacher?> GetById(int id)
    {
        return await _context.Teachers
            .Include(t => t.Address)
            .Where(t => t.Id == id)
            .Where(t => t.Status != Status.Deleted)
            .Where(t => t.Role == UserRole.Teacher)
            .FirstOrDefaultAsync();
    }
}