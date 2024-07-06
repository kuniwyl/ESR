using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.Users;

public class User: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public string Login { get; set; } = null!;
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public DateTime BirthDate { get; set; } 
    public string Phone { get; set; } = null!;
    public string PasswordHash { get; set; } = null!;
    public int AddressId { get; set; }
    public virtual Address Address { get; set; } = null!;

    public string Role { get; set; } = null!;

    public string RefreshToken { get; set; } = string.Empty;
    public DateTime RefreshTokenCreated { get; set; }
    public DateTime RefreshTokenExpires { get; set; }
}