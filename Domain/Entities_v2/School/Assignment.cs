namespace Domain.Entities_v2.School;

public class Assignment: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public int SubjectId { get; set; }
    public virtual Subject Subject { get; set; } = null!;
    
    public virtual List<Grade> Grades { get; set; } = new List<Grade>();
}