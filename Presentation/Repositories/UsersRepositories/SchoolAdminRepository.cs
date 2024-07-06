using Application.DB.DataContext;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.UsersRepositories;

public class SchoolAdminRepository: RepositoryBase<SchoolAdmin>, ISchoolAdminRepository
{
    public SchoolAdminRepository(SchoolContext context) : base(context)
    {
    }

    public new async Task<SchoolAdmin?> GetById(int id)
    {
        return await _context.SchoolAdmins
            .Include(s => s.Address)
            .Where(s => s.Id == id)
            .FirstOrDefaultAsync();
    }

    public async Task<SchoolAdmin[]> GetFromSchools(int schoolId)
    {
        return await _context.SchoolAdmins.Where(s => s.SchoolId == schoolId).ToArrayAsync();
    }
}