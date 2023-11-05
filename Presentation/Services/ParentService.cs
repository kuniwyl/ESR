using Application.DB.DataContext;
using Application.Dto;
using Application.IServices;
using AutoMapper;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Services;

public class ParentService(SchoolContext context, IUserService userService, IMapper mapper) : IParentService
{
    public async Task<List<ParentDto>> GetParentsFromSchool(int schoolId)
    {
        try
        {
            var parents = await context.Parents
                .Where(u => u.SchoolId == schoolId)
                .Include(u => u.Student)
                .ToListAsync();
            return mapper.Map<List<ParentDto>>(parents);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<ParentDto?> GetParentFromSchool(int schoolId, int id)
    {
        try
        {
            var parent = await context.Parents
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .Include(u => u.Student)
                .FirstOrDefaultAsync();
            return mapper.Map<ParentDto>(parent);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<ParentDto?> AddParentToSchool(int schoolId, int studentId, RegisterDto userDto)
    {
        try
        {
            if (await userService.IsUserExist(userDto.Login))
            {
                return null;
            }
            var parent = mapper.Map<Parent>(userDto);
            var school = await context.Schools.FirstOrDefaultAsync(s => s.Id == schoolId);
            var student = await context.Students.FirstOrDefaultAsync(s => s.Id == studentId);
            if (school == null || student == null) return null;
            
            parent.School = school;
            parent.Student = student;
            await context.Parents.AddAsync(parent);
            await context.SaveChangesAsync();
            return mapper.Map<ParentDto>(parent);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<ParentDto?> UpdateParentFromSchool(int schoolId, int id, RegisterDto userDto)
    {
        try
        {
            if (await userService.IsUserExist(userDto.Login))
            {
                return null;
            }
            var parent = await context.Parents
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .Include(u => u.Student)
                .FirstOrDefaultAsync();
            if (parent == null) return null;
            mapper.Map(userDto, parent);
            await context.SaveChangesAsync();
            return mapper.Map<ParentDto>(parent);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<bool> DeleteParentFromSchool(int schoolId, int id)
    {
        try
        {
            var parent = await context.Parents
                .Where(u => u.SchoolId == schoolId && u.Id == id)
                .FirstOrDefaultAsync();
            if (parent == null) return false;
            context.Parents.Remove(parent);
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