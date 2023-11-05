namespace Domain.Entities;

public interface IUser : IEntityBase
{
    public new int Id { get; set; }
    public new string Login { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PasswordHash { get; set; }
    public UserRole Role { get; set; }
    public string RefreshToken { get; set; }
    public DateTime RefreshTokenCreated { get; set; }
    public DateTime RefreshTokenExpires { get; set; }
    
}