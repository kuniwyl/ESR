namespace Domain.Entities;

public class Teacher : IUser
{
    public int Id { get; set; }
    public string Login { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PasswordHash { get; set; } = String.Empty;
    public new UserRole Role { get; set; } = UserRole.Teacher;
    public string RefreshToken { get; set; } = String.Empty;
    public DateTime RefreshTokenCreated { get; set; }
    public DateTime RefreshTokenExpires { get; set; }

    public int? ClassId { get; set; } = null;
    public Class? Class { get; set; } = null;
    
    public List<Subject> Subjects { get; set; } = new();

    public List<Notice> Notices { get; set; } = new();
    
    public int SchoolId { get; set; }
    public School School { get; set; } = null!;
}