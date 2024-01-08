using Application.DB.DataContext;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.UsersRepositories;

public class ParentRepository: RepositoryBase<Parent>, IParentRepository
{
    public ParentRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Parent[]> GetParentsFromClass(int classId)
    {
        var parents = await _context.Parents
            .Include(p => p.Student)
            .Where(p => p.Student.ClassId == classId)
            .Where(p => p.Status != Status.Deleted)
            .ToArrayAsync();
        return parents;
    }

    public new Task<IEnumerable<Parent>> GetAll()
    {
        return Task.FromResult(_context.Parents
            .Include(p => p.Student)
            .Where(p => p.Status != Status.Deleted)
            .AsEnumerable());
    }

    public new Task<Parent?> GetById(int id)
    {
        return _context.Parents
            .Include(p => p.Student)
            .Where(p => p.Status != Status.Deleted)
            .FirstOrDefaultAsync(p => p.Id == id);
    }
}