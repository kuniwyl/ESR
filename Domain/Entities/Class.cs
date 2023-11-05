namespace Domain.Entities;

public class Class : IEntityBase
{
    public new int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    
    public List<Student> Students { get; set; } = new();
    
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; } = new();
    
    public int SchoolId { get; set; }
    public School School { get; set; } = new();
}