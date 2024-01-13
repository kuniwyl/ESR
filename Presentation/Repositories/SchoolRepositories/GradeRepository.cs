using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class GradeRepository: RepositoryBase<Grade>, IGradeRepository
{
    public GradeRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Grade> GetGradesByStudentId(int semesterId, int studentId)
    {
        throw new NotImplementedException();
    }

    public async Task<Grade[]> GetGradesByCss(int id)
    {
        return await _context.Grades
            .Include(g => g.Student)
            .Where(g => g.ClassSubjectSemesterId == id)
            .Where(g => g.Status != Status.Deleted)
            .ToArrayAsync();
    }
}