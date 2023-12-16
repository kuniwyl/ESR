using Application.Dto;
using Domain.Models;

namespace Application.IServices.Auth;

public interface IAuthService
{
    Task<ServiceResponse<Tokens>> Login(LoginDto loginDto);
    Task<ServiceResponse<UserDto>> Register(RegisterDto registerDto);
    Task<ServiceResponse<Tokens>> RefreshToken(string refreshToken);
}