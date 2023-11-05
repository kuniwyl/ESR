using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/user")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    
    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterSystemAdminDto registerDto)
    {
        var userDto = await _authService.Register(registerDto);
        if (userDto == null)
        {
            return BadRequest("User already exists");
        }
        return Ok(userDto);
    }
    
    [HttpPost("login")]
    public async Task<ActionResult<AuthDto>> Login(LoginDto loginDto)
    {
        var tokens = await _authService.Login(loginDto);
        if (tokens == null)
        {
            return Unauthorized("Invalid credentials");
        }
        
        var authDto = new AuthDto
        {
            Token = tokens.Token,
            RefreshToken = tokens.RefreshToken.Token
        };
        return Ok(authDto);
    }
    
    [HttpPost("refresh-token")]
    public async Task<ActionResult<AuthDto>> RefreshToken(RefreshTokenDto refreshToken)
    {
        var tokens = await _authService.RefreshToken(refreshToken.RefreshToken);
        if (tokens == null)
        {
            return Unauthorized("Refresh token not found");
        }
        var authDto = new AuthDto
        {
            Token = tokens.Token,
            RefreshToken = tokens.RefreshToken.Token
        };
        return Ok(authDto);
    }
}