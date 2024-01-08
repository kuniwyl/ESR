using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Domain.Entities_v2;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.Models;
using Microsoft.IdentityModel.Tokens;

namespace Presentation.Utils;

public static class TokenUtil
{
    public static string CreateToken(User user, IConfiguration configuration)
    {
        var claims = new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new("Login", user.Login),
            new(ClaimTypes.Role, user.Role),
        };

        if (user is SchoolUser schoolUser)
        {
            claims.Add(new Claim("SchoolId", schoolUser.SchoolId.ToString()));
        }
        else
        {
            claims.Add(new Claim("SchoolId", "-69"));
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