using Application.DB.DataContext;
using Application.Dto;
using Application.IServices;
using AutoMapper;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Services;

public class SubjectService(SchoolContext context, IMapper mapper) : ISubjectService
{
    public async Task<List<SubjectDto>> GetSubjects(int schoolId)
    {
        try
        {
            var subjects = await context.Subjects
                .Where(s => s.SchoolId == schoolId)
                .Include(s => s.Teacher)
                .ToListAsync();
            return mapper.Map<List<SubjectDto>>(subjects);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return new List<SubjectDto>();
        }
    }

    public async Task<SubjectDto?> GetSubject(int schoolId, int id)
    {
        try
        {
            var subject = await context.Subjects
                .Include(s => s.Teacher)
                .FirstOrDefaultAsync(s => s.Id == id && s.SchoolId == schoolId);
            return subject == null ? null : mapper.Map<SubjectDto>(subject);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<SubjectDto?> AddSubject(int schoolId, SubjectDto subjectDto)
    {
        try
        {
            var subject = mapper.Map<Subject>(subjectDto);
            var teacher = await context.Teachers.FirstOrDefaultAsync(t => t.Id == subjectDto.Teacher.Id);
            var school = await context.Schools.FirstOrDefaultAsync(s => s.Id == schoolId);
            if (teacher == null || school == null) return null;
            
            subject.Teacher = teacher;
            subject.School = school;
            await context.Subjects.AddAsync(subject);
            await context.SaveChangesAsync();
            return mapper.Map<SubjectDto>(subject);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<SubjectDto?> UpdateSubject(int schoolId, int id, SubjectDto subjectDto)
    {
        try
        {
            var subject = await context.Subjects.Include(s => s.Teacher).FirstOrDefaultAsync(s => s.Id == id && s.SchoolId == schoolId);
            var teacher = await context.Teachers.FirstOrDefaultAsync(t => t.Id == subjectDto.Teacher.Id);
            if (subject == null || teacher == null) return null;
            
            subject.Name = subjectDto.Name;
            subject.Description = subjectDto.Description;
            subject.Teacher = teacher;
            await context.SaveChangesAsync();
            return mapper.Map<SubjectDto>(subject);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<bool> DeleteSubject(int schoolId, int id)
    {
        try
        {
            var subject = await context.Subjects.FirstOrDefaultAsync(s => s.Id == id && s.SchoolId == schoolId);
            if (subject == null)
            {
                return false;
            }
            context.Subjects.Remove(subject);
            await context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<List<UserShortDto>> GetStudentsFromSubject(int schoolId, int subjectId)
    {
        try
        {
            var subject = await context.Subjects
                .Include(subject => subject.Students)
                .FirstOrDefaultAsync(s => s.Id == subjectId && s.SchoolId == schoolId);
            return subject == null ? new List<UserShortDto>() : mapper.Map<List<UserShortDto>>(subject.Students);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return new List<UserShortDto>();
            
        }
    }

    public async Task<bool> AddStudentToSubject(int schoolId, int subjectId, int studentId)
    {
        try
        {
            var subject = await context.Subjects
                .Include(subject => subject.Students)
                .FirstOrDefaultAsync(s => s.Id == subjectId && s.SchoolId == schoolId);
            if (subject == null)
            {
                return false;
            }
            var student = await context.Students.FirstOrDefaultAsync(s => s.Id == studentId);
            if (student == null)
            {
                return false;
            }
            subject.Students.Add(student);
            await context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<bool> RemoveStudentFromSubject(int schoolId, int subjectId, int studentId)
    {
        try
        {
            var subject = await context.Subjects
                .Include(subject => subject.Students)
                .FirstOrDefaultAsync(s => s.Id == subjectId && s.SchoolId == schoolId);
            if (subject == null)
            {
                return false;
            }
            var student = await context.Students.FirstOrDefaultAsync(s => s.Id == studentId);
            if (student == null)
            {
                return false;
            }
            subject.Students.Remove(student);
            await context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }
}