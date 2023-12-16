namespace Application.Dto.School;

public class ClassDto
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    
    public string NameId { get; set; } = "";
    
    public int SchoolId { get; set; }
    public int TeacherId { get; set; }
}