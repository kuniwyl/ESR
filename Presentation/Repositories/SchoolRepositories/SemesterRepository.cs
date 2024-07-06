using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.Exceptions;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class SemesterRepository: RepositoryBase<Semester>, ISemesterRepository
{
    public SemesterRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Semester[]> GetSemestersBySchoolId(int schoolId)
    {
        return await _context.Semesters
            .Where(s => s.SchoolId == schoolId)
            .Where(s => s.Status != Status.Deleted)
            .ToArrayAsync();
    }

    public async Task<Semester> GetSemesterCurrentSemester(int schoolId)
    {
        var sem = await _context.Semesters
            .Where(s => s.SchoolId == schoolId).Where(s => s.StartDate <= DateTime.UtcNow && s.EndDate >= DateTime.UtcNow)
            .Where(s => s.Status != Status.Deleted)
            .FirstOrDefaultAsync();
        if (sem == null)
        {
            throw new SemesterNotFoundException(schoolId);
        }

        return sem;
    }
}