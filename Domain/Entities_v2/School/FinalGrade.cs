using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;

namespace Domain.Entities_v2.School;

public class FinalGrade: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public int Value { get; set; }
    
    public int ClassSubjectSemesterId { get; set; }
    public int StudentId { get; set; }
    
    public virtual ClassSubjectSemester ClassSubjectSemester { get; set; } = null!;
    public virtual Student Student { get; set; } = null!;
}