using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.Users;

public class Parent: SchoolUser
{
    public int StudentId { get; set; }
    public virtual Student Student { get; set; } = null!;
}