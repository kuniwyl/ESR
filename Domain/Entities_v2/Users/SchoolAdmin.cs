using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.Users;

public class SchoolAdmin : Teacher
{
    public new string Role { get; set; } = UserRole.SchoolAdmin;
}