using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class ClassNotice: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    
    public int ClassId { get; set; }
    public virtual Class Class { get; set; } = null!;
    
    public int SemesterId { get; set; }
    public virtual Semester Semester { get; set; } = null!;
    
    public DateOnly Date { get; set; }
    public int? Slot { get; set; }
}