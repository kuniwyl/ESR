namespace Domain.Entities;

public class Subject : IEntityBase
{
    public new int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    
    public List<Student> Students { get; set; } = new();
    
    public List<Assignment> Assignment { get; set; } = new();
    
    public int TeacherId { get; set; }
    public Teacher Teacher { get; set; } = new();
    
    public int SchoolId { get; set; }
    public School School { get; set; } = new();
}