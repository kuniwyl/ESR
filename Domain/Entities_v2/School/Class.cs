using Domain.Entities_v2.Users;

namespace Domain.Entities_v2.School;

public class Class: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string NameId { get; set; } = null!;
    
    public int SchoolId { get; set; }
    public virtual School School { get; set; } = null!;
    
    public int TeacherId { get; set; }
    public virtual Teacher Teacher { get; set; } = null!;
    
    public virtual List<Student> Students { get; set; } = new List<Student>();
    public virtual List<Subject> Subjects { get; set; } = new List<Subject>();
}