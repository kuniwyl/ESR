using Application.Dto;
using Domain.Models;

namespace Application.IServices;

public interface IAuthService
{
    Task<Tokens?> Login(LoginDto loginDto);
    Task<UserDto?> Register(RegisterSystemAdminDto registerDto);
    Task<Tokens?> RefreshToken(string refreshToken);
}