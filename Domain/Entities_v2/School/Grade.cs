using Domain.Entities_v2.Users;

namespace Domain.Entities_v2.School;

public class Grade: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public int Value { get; set; }
    public int Weight { get; set; }
    public int Description { get; set; }
    
    public int AssignmentId { get; set; }
    public virtual Assignment Assignment { get; set; } = null!;
    
    public int StudentId { get; set; }
    public virtual Student Student { get; set; } = null!;
}