using Application.Dto;
using Domain.Models;

namespace Application.IServices.Auth;

public interface IAuthService
{
    Task<ServiceResponse<Tokens>> Login(LoginDto loginDto);
    Task<ServiceResponse<UserDto>> Register(RegisterDto registerDto);
    Task<ServiceResponse<Tokens>> RefreshToken(string refreshToken);
    Task<ServiceResponse<UserDto>> GetUser(int id);
    Task<ServiceResponse<bool>> ResetPassword(int id, string newPassword);
}