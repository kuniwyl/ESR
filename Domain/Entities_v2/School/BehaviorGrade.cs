using Domain.Entities_v2.Users;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class BehaviorGrade: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Updated { get; set; } 
    public Status Status { get; set; } = Status.Active;

    public int Value { get; set; }
    
    public int StudentId { get; set; }
    public virtual Student Student { get; set; } = null!;
    
    public int TeacherId { get; set; }
    public virtual Teacher Teacher { get; set; } = null!;
}