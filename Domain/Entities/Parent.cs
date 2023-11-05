namespace Domain.Entities;

public class Parent : IUser
{
    public int Id { get; set; }
    public string Login { get; set; } = String.Empty;
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public string PasswordHash { get; set; } = String.Empty;
    public new UserRole Role { get; set; } = UserRole.Parent;
    public string RefreshToken { get; set; } = String.Empty;
    public DateTime RefreshTokenCreated { get; set; }
    public DateTime RefreshTokenExpires { get; set; }

    public int StudentId { get; set; } = 0;
    public Student Student { get; set; } = null!;
    
    public int SchoolId { get; set; } = 0;
    public School School { get; set; } = null!;
}