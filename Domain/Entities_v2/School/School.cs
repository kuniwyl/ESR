using Domain.Entities_v2.Users;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class School: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string? Website { get; set; }
    
    public int AddressId { get; set; }
    public virtual Address Address { get; set; } = null!;
    
    public virtual List<Class> Classes { get; set; } = new List<Class>();
    public virtual List<SchoolUser> SchoolUsers { get; set; } = new List<SchoolUser>();
    public virtual List<Semester> Semesters { get; set; } = new List<Semester>();
}