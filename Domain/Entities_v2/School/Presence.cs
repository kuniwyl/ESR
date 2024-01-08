using Domain.Entities_v2.Users;
using Domain.Models;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class Presence: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public PresenceStatus PresenceStatus { get; set; } = PresenceStatus.Absent;
    
    public int LessonId { get; set; }
    public int StudentId { get; set; }
    
    public virtual Lesson Lesson { get; set; } = null!;
    public virtual Student Student { get; set; } = null!;
}