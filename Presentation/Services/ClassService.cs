using Application.DB.DataContext;
using Application.Dto;
using Application.IServices;
using AutoMapper;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Services;

public class ClassService: IClassService
{
    private readonly SchoolContext _context;
    private readonly IMapper _mapper;
    
    public ClassService(SchoolContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public async Task<List<ClassDto>> GetClasses(int schoolId)
    {
        try
        {
            var classes = await _context.Classes
                .Where(s => s.SchoolId == schoolId)
                .Include(c => c.Teacher)
                .ToListAsync();
            return _mapper.Map<List<ClassDto>>(classes);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return new List<ClassDto>();
        }
    }

    public async Task<ClassDto?> GetClass(int schoolId, int id)
    {
        try
        {
            var classes = await _context.Classes
                .Include(c => c.Teacher)
                .FirstOrDefaultAsync(s => s.Id == id && s.SchoolId == schoolId);
            return @classes == null ? null : _mapper.Map<ClassDto>(classes);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<ClassDto?> AddClass(int schoolId, ClassDto classDto)
    {
        try
        {
            var @class = _mapper.Map<Class>(classDto);
            var teacher = await _context.Teachers.FirstOrDefaultAsync(t => t.Id == classDto.Teacher.Id);
            if (teacher == null) return null;
            var school = await _context.Schools.FirstOrDefaultAsync(s => s.Id == schoolId);
            if (school == null) return null;
            
            @class.Teacher = teacher;
            @class.School = school;
            await _context.Classes.AddAsync(@class);
            await _context.SaveChangesAsync();
            return _mapper.Map<ClassDto>(@class);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<ClassDto?> UpdateClass(int schoolId, int id, ClassDto classDto)
    {
        try 
        {
            var classEntity = await _context.Classes
                .Include(c => c.Teacher)
                .FirstOrDefaultAsync(c => c.Id == id && c.SchoolId == schoolId);
            if (classEntity == null) return null;
            var teacher = await _context.Teachers.FirstOrDefaultAsync(t => t.Id == classDto.Teacher.Id);
            Console.WriteLine(teacher);
            if (teacher == null) return null;
            
            classEntity.Name = classDto.Name;
            classEntity.Description = classDto.Description;
            classEntity.Teacher = teacher;
            await _context.SaveChangesAsync();
            return _mapper.Map<ClassDto>(classEntity);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<bool> DeleteClass(int schoolId, int id)
    {
        try
        {
            var classEntity = await _context.Classes.FirstOrDefaultAsync(c => c.Id == id && c.SchoolId == schoolId);
            if (classEntity == null) return false;
            _context.Classes.Remove(classEntity);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<List<UserShortDto>> GetStudentsFromClass(int schoolId, int classId)
    {
        try
        {
            var @class = await _context.Classes.Where(c => c.Id == classId && c.SchoolId == schoolId)
                .Include(c => c.Students)
                .FirstOrDefaultAsync();
            return @class == null ? new List<UserShortDto>() : _mapper.Map<List<UserShortDto>>(@class.Students);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return new List<UserShortDto>();
        }
    }

    public async Task<bool> AddStudentToClass(int schoolId, int classId, int studentId)
    {
        try
        {
            var @class = await _context.Classes
                .Include(c => c.Students)
                .FirstOrDefaultAsync(c => c.Id == classId && c.SchoolId == schoolId);
            if (@class == null) return false;
            var student = await _context.Students.FirstOrDefaultAsync(u => u.Id == studentId);
            if (student == null) return false;
            @class.Students.Add(student);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<bool> RemoveStudentFromClass(int schoolId, int classId, int studentId)
    {
        try
        {
            var @class = await _context.Classes
                .Include(c => c.Students)
                .FirstOrDefaultAsync(c => c.Id == classId && c.SchoolId == schoolId);
            if (@class == null) return false;
            var student = await _context.Students.FirstOrDefaultAsync(u => u.Id == studentId);
            if (student == null) return false;
            @class.Students.Remove(student);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }
}