using Domain.Entities_v2.Users;

namespace Domain.Entities_v2.School;

public class School: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Name { get; set; } = null!;
    public string Address { get; set; } = null!;
    public string City { get; set; } = null!;
    public string ZipCode { get; set; } = null!;
    
    public virtual List<Class> Classes { get; set; } = new List<Class>();
    public virtual List<SchoolUser> SchoolUsers { get; set; } = new List<SchoolUser>();
    public virtual List<Semester> Semesters { get; set; } = new List<Semester>();
}