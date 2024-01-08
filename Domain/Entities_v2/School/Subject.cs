using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;

namespace Domain.Entities_v2.School;

public class Subject: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public int TeacherId { get; set; }
    public virtual Teacher Teacher { get; set; } = null!;
    
    public int SchoolId { get; set; }
    public virtual School School { get; set; } = null!;

    public virtual List<ClassSubjectSemester> ClassSubjectSemesters { get; set; } = new List<ClassSubjectSemester>();
}