using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class CssRepository: RepositoryBase<ClassSubjectSemester>, ICssRepository
{
    public CssRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<ClassSubjectSemester[]> GetCssFromClassAndSemester(int classId, int semesterId)
    {
        return await _context.ClassSubjectSemesters
            .Include(x => x.Subject)
            .Include(x => x.Subject.Teacher)
            .Include(x => x.Class)
            .Where(x => x.ClassId == classId && x.SemesterId == semesterId)
            .Where(x => x.Status != Status.Deleted)
            .ToArrayAsync();
    }

    public async Task<ClassSubjectSemester[]> GetCssFromTeacher(int teacherId, int semesterId)
    {
        return await _context.ClassSubjectSemesters
            .Include(x => x.Assignments)
            .Include(x => x.Subject.Teacher)
            .Include(x => x.Class)
            .Where(x => x.Subject.TeacherId == teacherId && x.SemesterId == semesterId)
            .Where(x => x.Status != Status.Deleted)
            .ToArrayAsync();
    }

    public async Task<ClassSubjectSemester> GetGradesFromCss(int cssId)
    {
        return await _context.ClassSubjectSemesters
            .Include(x => x.Assignments)
            .Include(x => x.Assignments.Select(x => x.Grades))
            .Include(x => x.Assignments.Select(x => x.Grades.Select(x => x.Student)))
            .Where(x => x.Id == cssId)
            .Where(x => x.Status != Status.Deleted)
            .FirstOrDefaultAsync();
    }

    public new async Task<ClassSubjectSemester?> GetById(int id)
    {
        // group by students
        return await _context.ClassSubjectSemesters
            .Include(x => x.Class)
            .Include(x => x.Assignments)
            .Include(x => x.Assignments.Select(x => x.Grades.Select(x => x.Student)))
            .Where(x => x.Id == id)
            .FirstOrDefaultAsync();
    }
}