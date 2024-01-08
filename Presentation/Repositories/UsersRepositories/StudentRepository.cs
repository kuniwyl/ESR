using Application.DB.DataContext;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.UsersRepositories;

public class StudentRepository: RepositoryBase<Student>, IStudentRepository
{
    public StudentRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Student[]> GetStudentsFromClass(int classId)
    {
        var students = await _context.Students
            .Include(s => s.Parent)
            .Include(s => s.Parent.Address)
            .Include(s => s.Address)
            .Where(s => s.ClassId == classId)
            .Where(s => s.Status != Status.Deleted)
            .ToArrayAsync();
        return students;
    }

    public async Task<Student[]> GetStudentsFromClassWithGradesFromCss(int classId, int cssId)
    {
        var students = await _context.Students
            .Include(s => s.Grades.Where(g => g.Assignment.ClassSubjectSemesterId == cssId))
            .Where(s => s.ClassId == classId)
            .Where(s => s.Status != Status.Deleted)
            .ToArrayAsync();
        return students;
    }

    public new Task<Student?> GetById(int id)
    {
        return _context.Students
            .Include(s => s.Parent)
            .Include(s => s.Parent.Address)
            .Include(s => s.Address)
            .FirstOrDefaultAsync(s => s.Id == id);
    }
}