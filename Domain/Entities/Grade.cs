namespace Domain.Entities;

public class Grade : IEntityBase
{
    public new int Id { get; set; }
    public int Value { get; set; }
    public string Description { get; set; } = "";
    
    public int SubjectId { get; set; }
    public Subject Subject { get; set; } = null!;
    
    public int StudentId { get; set; }
    public Student Student { get; set; } = null!;
}