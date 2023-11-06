using Application.DB.DataContext;
using Application.Dto;
using Application.IServices;
using AutoMapper;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Presentation.Utils;

namespace Presentation.Services;

public class StudentService(SchoolContext context, IUserService userService, IMapper mapper) : IStudentService
{
    public async Task<List<UserShortDto>> GetStudentsFromSchool(int schoolId)
    {
        try
        {
            var students = await context.Students
                .Where(u => u.SchoolId == schoolId)
                .ToListAsync();
            return mapper.Map<List<UserShortDto>>(students);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<UserDto?> GetStudentFromSchool(int schoolId, int id)
    {
        try
        {
            var student = await context.Students
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .FirstOrDefaultAsync();
            return mapper.Map<UserDto>(student);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<UserDto?> AddStudentToSchool(int schoolId, RegisterDto registerDto)
    {
        try
        {
            if (await userService.IsUserExist(registerDto.Login))
            {
                return null;
            }
            var student = mapper.Map<Student>(registerDto);
            var school = await context.Schools
                .Where(s => s.Id == schoolId)
                .FirstOrDefaultAsync();
            if (school == null) return null;
            
            student.PasswordHash = PasswordUtil.GeneratePasswordHash(registerDto.Password);
            student.School = school;
            await context.Students.AddAsync(student);
            await context.SaveChangesAsync();
            return mapper.Map<UserDto>(student);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<UserDto?> UpdateStudentFromSchool(int schoolId, int id, RegisterDto registerDto)
    {
        try
        {
            if (await userService.IsUserExist(registerDto.Login, id))
            {
                return null;
            }
            var student = await context.Students
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .FirstOrDefaultAsync();
            if (student == null)
            {
                return null;
            }
            mapper.Map(registerDto, student);
            if (registerDto.Password != string.Empty)
            {
                student.PasswordHash = PasswordUtil.GeneratePasswordHash(registerDto.Password);
            }
            await context.SaveChangesAsync();
            return mapper.Map<UserDto>(student);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<bool> DeleteStudentFromSchool(int schoolId, int id)
    {
        try
        {
            var student = await context.Students
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .FirstOrDefaultAsync();
            if (student == null)
            {
                return false;
            }
            context.Students.Remove(student);
            await context.SaveChangesAsync();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}