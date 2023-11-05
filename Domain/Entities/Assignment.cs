namespace Domain.Entities;

public class Assignment : IEntityBase
{
    public new int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public DateTime DueDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    
    public int SubjectId { get; set; }
    public Subject Subject { get; set; } = null!;
    
    public List<Grade> Grades { get; set; } = new();
}