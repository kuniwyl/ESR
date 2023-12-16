using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class SubjectRepository: RepositoryBase<Subject>, ISubjectRepository
{
    public SubjectRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Subject[]> GetSubjectsByStudentId(int semesterId, int studentId)
    {
        var subjects = await _context.Subjects
            .Include(s => s.Assignments)
            .Include(s => s.Class)
            .Where(s => s.SemesterId == semesterId)
            .Where(su => su.Class.Students.Any(s => s.Id == studentId)).ToListAsync();
        return subjects.ToArray();
    }
}