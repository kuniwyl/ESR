using Application.DB.DataContext;
using Application.Dto;
using Application.IServices;
using AutoMapper;
using Domain.Entities;
using Domain.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Services;

public class SchoolService : ISchoolService
{
    private readonly SchoolContext _context;
    private readonly IMapper _mapper;
    private readonly IUserService _userService;
    
    public SchoolService(SchoolContext context, IMapper mapper, IUserService userService)
    {
        _context = context;
        _mapper = mapper;
        _userService = userService;
    }
    
    public async Task<IEnumerable<SchoolDto>> GetSchools()
    {
        try
        {
            var schools = _context.Schools.Include(school => school.SchoolAdmins);
            return _mapper.Map<List<SchoolDto>>(schools);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return new List<SchoolDto>();
        }
    }

    public async Task<SchoolDto?> GetSchool(int id)
    {
        try
        {
            var school = await _context.Schools.Include(school => school.SchoolAdmins).FirstOrDefaultAsync(school => school.Id == id);
            if (school == null)
            {
                return null;
            }
            return _mapper.Map<SchoolDto>(school);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<SchoolDto?> AddSchool(ModifySchoolDto schoolDto)
    {
        try
        {
            var school = new School
            {
                Name = schoolDto.Name,
                Address = schoolDto.Address,
                City = schoolDto.City,
                State = schoolDto.State,
                ZipCode = schoolDto.ZipCode,
                PhoneNumber = schoolDto.PhoneNumber,
                Email = schoolDto.Email,
                Website = schoolDto.Website,
                LogoUrl = schoolDto.LogoUrl,
            };
            await _context.Schools.AddAsync(school);
            await _context.SaveChangesAsync();
            return _mapper.Map<SchoolDto>(school);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<SchoolDto?> UpdateSchool(ModifySchoolDto schoolDto)
    {
        try
        {
            var school = await _context.Schools.FindAsync(schoolDto.Id);
            if (school == null)
            {
                return null;
            }
            school.Name = schoolDto.Name;
            school.Address = schoolDto.Address;
            school.City = schoolDto.City;
            school.State = schoolDto.State;
            school.ZipCode = schoolDto.ZipCode;
            school.PhoneNumber = schoolDto.PhoneNumber;
            school.Email = schoolDto.Email;
            school.Website = schoolDto.Website;
            school.LogoUrl = schoolDto.LogoUrl;
            _context.Schools.Update(school);
            await _context.SaveChangesAsync();
            return _mapper.Map<SchoolDto>(school);
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<bool> DeleteSchool(int id)
    {
        try
        {
            var school = await _context.Schools.FindAsync(id);
            if (school == null)
            {
                return false;
            }
            _context.Schools.Remove(school);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<UserDto?> AddSchoolAdmin(int schoolId, RegisterDto registerDto)
    {
        try
        {
            var school = await _context.Schools.FindAsync(schoolId);
            if (school == null)
            {
                return null;
            }
            var hash = BCrypt.Net.BCrypt.HashPassword(registerDto.Password);
            if (await _userService.IsUserExist(registerDto.Login))
            {
                return null;
            }
            var schoolAdmin = new SchoolAdmin
            {
                Login = registerDto.Login,
                PasswordHash = hash,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                School = school,
            };
            await _context.SchoolAdmins.AddAsync(schoolAdmin);
            await _context.SaveChangesAsync();
            return new UserDto
            {
                Id = schoolAdmin.Id,
                Login = schoolAdmin.Login,
                FirstName = schoolAdmin.FirstName,
                LastName = schoolAdmin.LastName,
                SchoolId = schoolAdmin.SchoolId,
            };
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<UserDto?> UpdateSchoolAdmin(int schoolId, int id, UserDto userDto)
    {
        try
        {
            var school = await _context.Schools.FindAsync(schoolId);
            if (school == null)
            {
                return null;
            }
            var schoolAdmin = await _context.SchoolAdmins.FindAsync(id);
            if (schoolAdmin == null)
            {
                return null;
            }
            schoolAdmin.Login = userDto.Login;
            schoolAdmin.FirstName = userDto.FirstName;
            schoolAdmin.LastName = userDto.LastName;
            _context.SchoolAdmins.Update(schoolAdmin);
            await _context.SaveChangesAsync();
            return new UserDto
            {
                Id = schoolAdmin.Id,
                Login = schoolAdmin.Login,
                FirstName = schoolAdmin.FirstName,
                LastName = schoolAdmin.LastName,
                SchoolId = schoolAdmin.SchoolId,
            };
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<bool> DeleteSchoolAdmin(int schoolId, int id)
    {
        try
        {
            var school = await _context.Schools.FindAsync(schoolId);
            if (school == null)
            {
                return false;
            }
            var schoolAdmin = await _context.SchoolAdmins.FindAsync(id);
            if (schoolAdmin == null)
            {
                return false;
            }
            _context.SchoolAdmins.Remove(schoolAdmin);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }
}