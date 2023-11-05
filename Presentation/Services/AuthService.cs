using Application.DB.DataContext;
using Application.Dto;
using Application.IServices;
using Domain.Entities;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Presentation.Utils;

namespace Presentation.Services;

public class AuthService : IAuthService
{
    private readonly SchoolContext _context;
    private readonly IConfiguration _configuration;
    private readonly IUserService _userService;
    private readonly IHttpContextAccessor _httpContextAccessor;
    
    public AuthService(SchoolContext context, IConfiguration configuration, IHttpContextAccessor httpContextAccessor, IUserService userService)
    {
        _context = context;
        _configuration = configuration;
        _userService = userService;
        _httpContextAccessor = httpContextAccessor;
    }
    
    public async Task<Tokens?> Login(LoginDto loginDto)
    {
        var user = await _userService.GetUser(loginDto.Login);
        if (user == null)
        {
            return null;
        }
        
        if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
        {
            return null;
        }
        
        var token = TokenUtil.CreateToken(user, _configuration);
        var refreshToken = TokenUtil.GenerateRefreshToken();
        
        user.RefreshToken = refreshToken.Token;
        user.RefreshTokenCreated = refreshToken.Created;
        user.RefreshTokenExpires = refreshToken.Expires;
        await _context.SaveChangesAsync();

        var tokens = new Tokens
        {
            Token = token,
            RefreshToken = refreshToken,
        };
        return tokens;
    }

    public async Task<UserDto?> Register(RegisterSystemAdminDto registerDto)
    {
        var userExist = await _context.SystemAdmins.AnyAsync(u => u.Login == registerDto.Login);
        if (userExist)
        {
            return null;
        }
        
        var passwordHash = BCrypt.Net.BCrypt.HashPassword(registerDto.Password);
        var systemAdmin = new SystemAdmin();
        systemAdmin.Login = registerDto.Login;
        systemAdmin.PasswordHash = passwordHash;
        systemAdmin.FirstName = registerDto.FirstName;
        systemAdmin.LastName = registerDto.LastName;
        systemAdmin.Role = UserRole.SystemAdmin;
        
        await _context.AddAsync(systemAdmin);
        await _context.SaveChangesAsync();

        var userDto = new UserDto();
        userDto.Id = systemAdmin.Id;
        userDto.Login = systemAdmin.Login;
        userDto.FirstName = systemAdmin.FirstName;
        userDto.LastName = systemAdmin.LastName;
        userDto.Role = systemAdmin.Role;
        userDto.SchoolId = 0;
        
        return userDto;
    }

    public async Task<Tokens?> RefreshToken(string refreshToken)
    {
        var user = await _userService.GetUserByRefreshToken(refreshToken);
        if (user == null)
        {
            return null;
        }
        
        if (user.RefreshTokenExpires < DateTime.UtcNow)
        {
            return null;
        }
        
        var token = TokenUtil.CreateToken(user, _configuration);
        var newRefreshToken = TokenUtil.GenerateRefreshToken();
        
        user.RefreshToken = newRefreshToken.Token;
        user.RefreshTokenCreated = newRefreshToken.Created;
        user.RefreshTokenExpires = newRefreshToken.Expires;
        await _context.SaveChangesAsync();
        
        return new Tokens
        {
            Token = token,
            RefreshToken = newRefreshToken
        };
    }
}