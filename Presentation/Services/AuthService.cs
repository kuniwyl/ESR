using Application.DB.DataContext;
using Application.Dto;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.Auth;
using AutoMapper;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
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
    private readonly IMapper _mapper;
    
    public AuthService(SchoolContext context, IConfiguration configuration, IHttpContextAccessor httpContextAccessor, IUserRepository userRepository, IMapper mapper)
    {
        _context = context;
        _configuration = configuration;
        _httpContextAccessor = httpContextAccessor;
        _userRepository = userRepository;
        _mapper = mapper;
    }
    
    public async Task<ServiceResponse<Tokens>> Login(LoginDto loginDto)
    {
        var user = await _userRepository.GetByLogin(loginDto.Login);

        if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
        {
            throw new NotAuthorizedException<Tokens>("Niepoprawne dane logowania");
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

    public async Task<ServiceResponse<UserDto>> Register(RegisterDto registerDto)
    {
        throw new NotImplementedException();
    }

    public async Task<ServiceResponse<Tokens>> RefreshToken(string refreshToken)
    {
        var user = await _userRepository.GetByRefreshToken(refreshToken);
        if (user.RefreshTokenExpires < DateTime.UtcNow)
        {
            throw new ExpiredRefreshTokenException<User>();
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

    public async Task<ServiceResponse<UserDto>> GetUser(int id)
    {
        var user = await _userRepository.GetById(id);
        return new ServiceResponse<UserDto>()
        {
            Data = _mapper.Map<UserDto>(user),
            Message = "Pobrano użytkownika",
            Success = true
        };
    }

    public async Task<ServiceResponse<bool>> ResetPassword(int id, string newPassword)
    {
        var user = await _userRepository.GetById(id);
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(id);
        }
        var password = BCrypt.Net.BCrypt.HashPassword(newPassword);
        user.PasswordHash = password;
        await _userRepository.ResetPassword(user);
        return new ServiceResponse<bool>()
        {
            Data = true,
            Message = "Zresetowano hasło",
            Success = true
        };
    }
}