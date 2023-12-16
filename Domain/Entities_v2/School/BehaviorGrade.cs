using Domain.Entities_v2.Users;

namespace Domain.Entities_v2.School;

public class BehaviorGrade: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }

    public int Value { get; set; }
    
    public int StudentId { get; set; }
    public virtual Student Student { get; set; } = null!;
    
    public int TeacherId { get; set; }
    public virtual Teacher Teacher { get; set; } = null!;
}