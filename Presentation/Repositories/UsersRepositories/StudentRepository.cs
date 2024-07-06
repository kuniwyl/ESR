using Application.DB.DataContext;
using Domain.Entities_v2.School;
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
            .Include(s => s.Grades.Where(g => g.ClassSubjectSemesterId == cssId))
            .Where(s => s.ClassId == classId)
            .Where(s => s.Status != Status.Deleted)
            .ToArrayAsync();
        return students;
    }

    public async Task<FinalGrade[]> GetFinalGrades(int studId, int semesterId)
    {
        var finalGrade = await _context.FinalGrades
            .Include(fg => fg.Student)
            .Include(fg => fg.ClassSubjectSemester)
            .Where(fg => fg.StudentId == studId)
            .Where(fg => fg.Status != Status.Deleted)
            .ToArrayAsync();
        return finalGrade;
    }

    public async Task<Grade[]> GetGrades(int studId, int semesterId)
    {
        var grades = await _context.Grades
            .Include(g => g.Student)
            .Include(g => g.ClassSubjectSemester)
            .Where(g => g.StudentId == studId)
            .Where(g => g.Status != Status.Deleted)
            .ToArrayAsync();
        return grades;
    }

    public async Task<Presence[]> GetPresence(int studId, int semesterId)
    {
        var presence = await _context.Presences
            .Include(p => p.Student)
            .Include(p => p.Lesson)
            .Include(p => p.Lesson.ClassSubjectSemester)
            .Where(p => p.StudentId == studId)
            .Where(p => p.Status != Status.Deleted)
            .ToArrayAsync();
        return presence;
    }

    public async Task<ClassSubjectSemester[]> GetClassSubjectSemesters(int classId, int semesterId)
    {
        var css = await _context.ClassSubjectSemesters
            .Include(c => c.Class)
            .Include(c => c.Subject)
            .Include(c => c.Semester)
            .Where(c => c.ClassId == classId)
            .Where(c => c.Status != Status.Deleted)
            .ToArrayAsync();
        return css;
    }

    public new Task<Student?> GetById(int studId)
    {
        return _context.Students
            .Include(s => s.Parent)
            .Include(s => s.Parent.Address)
            .Include(s => s.Address)
            .FirstOrDefaultAsync(s => s.Id == studId);
    }
}