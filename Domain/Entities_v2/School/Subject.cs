using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;

namespace Domain.Entities_v2.School;

public class Subject: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public int SemesterId { get; set; }
    public virtual Semester Semester { get; set; } = null!;
    
    public Days Day { get; set; }
    public int Slot { get; set; }
    
    public int TeacherId { get; set; }
    public virtual Teacher Teacher { get; set; } = null!;
    
    public int ClassId { get; set; }
    public virtual Class Class { get; set; } = null!;
    
    public virtual List<Assignment> Assignments { get; set; } = null!;
}