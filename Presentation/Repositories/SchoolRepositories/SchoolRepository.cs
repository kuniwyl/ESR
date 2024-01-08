using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class SchoolRepository: RepositoryBase<School>, ISchoolRepository
{
    public SchoolRepository(SchoolContext context) : base(context)
    {
    }

    public new async Task<IEnumerable<School>> GetAll()
    {
        var schools = await _context.Schools
            .Include(s => s.Address)
            .Include(s => s.SchoolUsers.Where(sh => sh.Role == UserRole.SchoolAdmin))
            .ToListAsync();
        return schools;
    }

    public async Task<School> GetSchoolWithAdmins(int id)
    {
        var schools = await _context.Schools
            .Include(s => s.Address)
            .Include(s => s.SchoolUsers.Where(sh => sh.Role == UserRole.SchoolAdmin).Where(sh => sh.Status != Status.Deleted))
            .FirstOrDefaultAsync(s => s.Id == id);
        if (schools == null)
        {
            throw new Exception("Nie znaleziono szkoły");
        }
        
        return schools;
    }
}