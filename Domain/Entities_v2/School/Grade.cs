using Domain.Entities_v2.Users;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class Grade: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public int Value { get; set; }
    public int Weight { get; set; }
    public string Description { get; set; }
    
    public int ClassSubjectSemesterId { get; set; }
    public int StudentId { get; set; }
    
    public virtual ClassSubjectSemester ClassSubjectSemester { get; set; } = null!;
    public virtual Student Student { get; set; } = null!;
    
}