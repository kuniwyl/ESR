using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class SubjectRepository: RepositoryBase<Subject>, ISubjectRepository
{
    public SubjectRepository(SchoolContext context) : base(context)
    {
    }

    public new Task<Subject?> GetById(int id)
    {
        return _context.Subjects
            .Where(s => s.Status != Status.Deleted)
            .Include(s => s.Teacher)
            .FirstOrDefaultAsync(s => s.Id == id);
    }

    public async Task<Subject[]> GetSubjectsBySchool(int schoolId)
    {
        return await _context.Subjects
            .Where(s => s.SchoolId == schoolId)
            .Where(s => s.Status != Status.Deleted)
            .Include(s => s.Teacher)
            .ToArrayAsync();
    }
}