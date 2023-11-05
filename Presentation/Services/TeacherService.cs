using Application.DB.DataContext;
using Application.Dto;
using Application.IServices;
using AutoMapper;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Services;

public class TeacherService(SchoolContext context, IUserService userService, IMapper mapper)
    : ITeacherService
{
    public async Task<List<UserShortDto>> GetTeachersFromSchool(int schoolId)
    {
        try
        {
            var teachers = await context.Teachers
                .Where(u => u.SchoolId == schoolId)
                .ToListAsync();
            return mapper.Map<List<UserShortDto>>(teachers);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<UserDto?> GetTeacherFromSchool(int schoolId, int id)
    {
        try
        {
            var teacher = await context.Teachers
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .FirstOrDefaultAsync();
            return mapper.Map<UserDto>(teacher);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<UserDto?> AddTeacherToSchool(int schoolId, RegisterDto userDto)
    {
        try
        {
            if (await userService.IsUserExist(userDto.Login))
            {
                return null;
            }
            var teacher = mapper.Map<Teacher>(userDto);
            var school = await context.Schools
                .Where(s => s.Id == schoolId)
                .FirstOrDefaultAsync();
            if (school == null) return null;
            
            teacher.School = school;
            await context.Teachers.AddAsync(teacher);
            await context.SaveChangesAsync();
            return mapper.Map<UserDto>(teacher);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<UserDto?> UpdateTeacherFromSchool(int schoolId, int id, RegisterDto userDto)
    {
        try
        {
            if (await userService.IsUserExist(userDto.Login))
            {
                return null;
            }
            var teacher = await context.Teachers
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .FirstOrDefaultAsync();
            if (teacher == null) return null;
            mapper.Map(userDto, teacher);
            await context.SaveChangesAsync();
            return mapper.Map<UserDto>(teacher);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<bool> DeleteTeacherFromSchool(int schoolId, int id)
    {
        try
        {
            var teacher = await context.Teachers
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .FirstOrDefaultAsync();
            if (teacher == null) return false;
            context.Teachers.Remove(teacher);
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