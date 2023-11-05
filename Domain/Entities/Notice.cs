namespace Domain.Entities;

public class Notice : IEntityBase
{
    public new int Id { get; set; }
    public string Title { get; set; } = "";
    public string Content { get; set; } = "";
    
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; } = new();
    
    public int StudentId { get; set; }
    public Student Student { get; set; } = new();
}