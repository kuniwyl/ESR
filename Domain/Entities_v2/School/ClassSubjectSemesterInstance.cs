using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class ClassSubjectSemesterInstance : IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public Days Day { get; set; }
    public int Slot { get; set; }
    
    public int ClassSubjectSemesterId { get; set; }
    public virtual ClassSubjectSemester ClassSubjectSemester { get; set; } = null!;
}