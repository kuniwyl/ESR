namespace Domain.Entities_v2.Users;

public class SchoolUser: User
{
    public int SchoolId { get; set; }
    public virtual School.School School { get; set; } = null!;
}