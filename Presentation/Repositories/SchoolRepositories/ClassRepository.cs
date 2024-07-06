using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class ClassRepository: RepositoryBase<Class>, IClassRepository
{
    public ClassRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Class[]> GetClassesFromSchool(int schoolId)
    {
        var classes = await _context.Classes.Where(c => c.SchoolId == schoolId).Where(c => c.Status != Status.Deleted).Include(c => c.Teacher).ToArrayAsync();
        return classes;
    }
}