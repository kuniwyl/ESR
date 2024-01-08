using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class Assignment: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public int ClassSubjectSemesterId { get; set; }
    public virtual ClassSubjectSemester ClassSubjectSemester { get; set; } = null!;
    
    public virtual List<Grade> Grades { get; set; } = null!;
}