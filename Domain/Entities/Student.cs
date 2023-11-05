namespace Domain.Entities;

public class Student : IUser
{
    public new int Id { get; set; }
    public string Login { get; set; } = String.Empty;
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public string PasswordHash { get; set; } = String.Empty;
    public new UserRole Role { get; set; } = UserRole.Student;
    public string RefreshToken { get; set; } = String.Empty;
    public DateTime RefreshTokenCreated { get; set; }
    public DateTime RefreshTokenExpires { get; set; }
    
    public int SchoolId { get; set; }
    public School School { get; set; } = null!;
}