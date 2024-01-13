using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class ClassNotice: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public int ClassId { get; set; }
    public virtual Class Class { get; set; } = null!;
    
    public int NoticeId { get; set; }
    public virtual Notice Notice { get; set; } = null!;
}