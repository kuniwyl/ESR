using Application.DB.DataContext;
using Application.Dto;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.Auth;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services;

public class AuthService : IAuthService
{
    private readonly SchoolContext _context;
    private readonly IConfiguration _configuration;
    private readonly IUserRepository _userRepository;
    private readonly IHttpContextAccessor _httpContextAccessor;
    
    public AuthService(SchoolContext context, IConfiguration configuration, IHttpContextAccessor httpContextAccessor, IUserRepository userRepository)
    {
        _context = context;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
        _userRepository = userRepository;
    }
    
    public async Task<ServiceResponse<Tokens>> Login(LoginDto loginDto)
    {
        try
        {
            var user = await _userRepository.GetByLogin(loginDto.Login);

            if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
            {
                throw new NotAuthorizedExceprion<Tokens>("Niepoprawne dane logowania");
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
            return new ServiceResponse<Tokens>()
            {
                Data = tokens,
                Message = "Zalogowano",
                Success = true
            };
        }
        catch (Exception e)
        {
            return new ServiceResponse<Tokens>()
            {
                Data = null,
                Message = e.Message,
                Success = false
            };
        }
    }

    public async Task<ServiceResponse<UserDto>> Register(RegisterDto registerDto)
    {
        throw new NotImplementedException();
    }

    async Task<ServiceResponse<Tokens>> IAuthService.RefreshToken(string refreshToken)
    {
        try
        {
            var user = await _userRepository.GetByRefreshToken(refreshToken);
        
            if (user.RefreshTokenExpires < DateTime.UtcNow)
            {
                throw new ExpiredRefreshTokenException<User>("Refresh token wygasł");
            }
        
            var token = TokenUtil.CreateToken(user, _configuration);
            var newRefreshToken = TokenUtil.GenerateRefreshToken();
        
            user.RefreshToken = newRefreshToken.Token;
            user.RefreshTokenCreated = newRefreshToken.Created;
            user.RefreshTokenExpires = newRefreshToken.Expires;
            await _context.SaveChangesAsync();
        
            var tokens = new Tokens
            {
                Token = token,
                RefreshToken = newRefreshToken
            };
            return new ServiceResponse<Tokens>()
            {
                Data = tokens,
                Message = "Odświeżono token",
                Success = true
            };
        }
        catch (Exception e)
        {
            return new ServiceResponse<Tokens>()
            {
                Data = null,
                Message = e.Message,
                Success = false
            };
        }
    }
}