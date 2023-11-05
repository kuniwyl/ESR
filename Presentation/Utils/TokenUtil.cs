using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Domain.Entities;
using Domain.Models;
using Microsoft.IdentityModel.Tokens;

namespace Presentation.Utils;

public static class TokenUtil
{
    public static string CreateToken(IUser user, IConfiguration configuration)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Login),
            new Claim(ClaimTypes.Role, user.Role.ToString()),
        };
        
        switch (user)
        {
            case Student student:
                claims.Add(new Claim("SchoolId", student.SchoolId.ToString()));
                break;
            case Teacher teacher:
                claims.Add(new Claim("SchoolId", teacher.SchoolId.ToString()));
                break;
            case Parent parent:
                claims.Add(new Claim("SchoolId", parent.SchoolId.ToString()));
                break;
            case SchoolAdmin schoolAdmin:
                claims.Add(new Claim("SchoolId", schoolAdmin.SchoolId.ToString()));
                break;
            case SystemAdmin systemAdmin:
                claims.Add(new Claim("SchoolId", "-1"));
                break;
        }
        
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("JWTKey:Secret").Value!));
        var cred = new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: cred
        );
        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        return jwt;
    }
    
    public static RefreshToken GenerateRefreshToken()
    {
        var refreshToken = new RefreshToken
        {
            Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
            Expires = DateTime.UtcNow.AddDays(7)
        };
        return refreshToken;
    }
    
    public static void SetRefreshTokenCookie(RefreshToken refreshToken, HttpResponse response)
    {
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Expires = refreshToken.Expires
        };
        response.Cookies.Append("refreshToken", refreshToken.Token, cookieOptions);
    }
}