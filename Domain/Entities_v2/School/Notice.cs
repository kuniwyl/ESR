using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class Notice: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    
    public int SemesterId { get; set; }
    public virtual Semester Semester { get; set; } = null!;
    
    public Days? Days { get; set; }
    public int? Slot { get; set; }
}