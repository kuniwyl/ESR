using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class AssignmentRepository: RepositoryBase<Assignment>, IAssignmentRepository
{
    public AssignmentRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Assignment[]?> GetByCssId(int cssId)
    {
        Assignment[]? assignments = await _context.Assignments
            .Include(x => x.Grades.Where(g => g.Status != Status.Deleted))
            // include student and grade
            .Where(x => x.ClassSubjectSemesterId == cssId)
            .Where(x => x.Status != Status.Deleted)
            .ToArrayAsync();
        var grades = await _context.Grades
            .Include(x => x.Student)
            .Where(x => x.Status != Status.Deleted)
            .ToArrayAsync();
        foreach (var assignment in assignments)
        {
            assignment.Grades = grades.Where(x => x.AssignmentId == assignment.Id).ToList();
        }

        return assignments;
    }
}