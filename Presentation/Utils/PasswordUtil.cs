namespace Presentation.Utils;

public static class PasswordUtil
{
    public static string GeneratePasswordHash(string password) => BCrypt.Net.BCrypt.HashPassword(password);
    public static bool VerifyPassword(string password, string passwordHash) => BCrypt.Net.BCrypt.Verify(password, passwordHash);
}