using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class CssInstanceRepository: RepositoryBase<ClassSubjectSemesterInstance>, ICssInstanceRepository
{
    public CssInstanceRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<List<ClassSubjectSemesterInstance>> GetBySemesterIdAndClassId(int semesterId, int classId)
    {
        Console.WriteLine("repo");
        return await _context.ClassSubjectSemesterInstances
            .Include(x => x.ClassSubjectSemester)
            .Include(x => x.ClassSubjectSemester.Subject)
            .Include(x => x.ClassSubjectSemester.Subject.Teacher)
            .Where(x => x.ClassSubjectSemester.SemesterId == semesterId)
            .Where(x => x.ClassSubjectSemester.ClassId == classId)
            .Where(x => x.Status != Status.Deleted)
            .ToListAsync();
    }

    public async Task<List<ClassSubjectSemesterInstance>> GetBySemesterAndTeacherId(int semesterId, int teacherId)
    {
        return await _context.ClassSubjectSemesterInstances
            .Include(x => x.ClassSubjectSemester)
            .Include(x => x.ClassSubjectSemester.Subject)
            .Include(x => x.ClassSubjectSemester.Subject.Teacher)
            .Include(x => x.ClassSubjectSemester.Class)
            .Where(x => x.ClassSubjectSemester.SemesterId == semesterId)
            .Where(x => x.ClassSubjectSemester.Subject.TeacherId == teacherId)
            .Where(x => x.Status != Status.Deleted)
            .ToListAsync();
    }


    public async Task<int> CountByCssId(int cssId)
    {
        return await _context.ClassSubjectSemesterInstances
            .Where(x => x.ClassSubjectSemesterId == cssId)
            .Where(x => x.Status != Status.Deleted)
            .CountAsync();
    }
}