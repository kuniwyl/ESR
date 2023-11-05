namespace Domain.Entities;

public class SystemAdmin : IUser
{
    public new int Id { get; set; }
    public string Login { get; set; } = String.Empty;
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public string PasswordHash { get; set; } = String.Empty;
    public new UserRole Role { get; set; } = UserRole.SystemAdmin;
    public string RefreshToken { get; set; } = String.Empty;
    public DateTime RefreshTokenCreated { get; set; }
    public DateTime RefreshTokenExpires { get; set; }
}