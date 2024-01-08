using Application.Dto;
using Application.IServices;
using Application.IServices.Auth;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    
    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }
    
    [HttpPost("login")]
    public async Task<ActionResult<AuthDto>> Login(LoginDto loginDto)
    {
        var tokens = await _authService.Login(loginDto);
        if (tokens.Data == null)
        {
            return Unauthorized("Invalid credentials");
        }
        
        var authDto = new AuthDto
        {
            Token = tokens.Data.Token,
            RefreshToken = tokens.Data.RefreshToken.Token
        };
        return Ok(authDto);
    }
    
    [HttpPost("refresh-token")]
    public async Task<ActionResult<AuthDto>> RefreshToken(RefreshTokenDto refreshToken)
    {
        var tokens = await _authService.RefreshToken(refreshToken.RefreshToken);
        if (tokens.Data == null)
        {
            return Unauthorized("Refresh token not found");
        }
        var authDto = new AuthDto
        {
            Token = tokens.Data.Token,
            RefreshToken = tokens.Data.RefreshToken.Token
        };
        return Ok(authDto);
    }
    
    [HttpGet("user/{id}")]
    public async Task<ActionResult<UserDto>> GetUser(int id)
    {
        var user = await _authService.GetUser(id);
        if (user.Data == null)
        {
            return NotFound("User not found");
        }
        return Ok(user.Data);
    }
    
    [HttpPut("user/{id}/reset-password")]
    public async Task<ActionResult> ResetPassword(int id, ResetPasswordDto resetPasswordDto)
    {
        var result = await _authService.ResetPassword(id, resetPasswordDto.newPassword);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        }
        return Ok(result.Message);
    }
}