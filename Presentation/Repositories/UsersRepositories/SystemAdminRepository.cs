using Application.DB.DataContext;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.UsersRepositories;

public class SystemAdminRepository: RepositoryBase<SystemAdmin>, ISystemAdminRepository
{
    public SystemAdminRepository(SchoolContext context) : base(context)
    {
    }

    public new async Task<SystemAdmin?> GetById(int id)
    {
        return await _context.SystemAdmins
            .Include(s => s.Address)
            .Where(s => s.Id == id)
            .Where(s => s.Status != Status.Deleted)
            .FirstOrDefaultAsync();
    }
}