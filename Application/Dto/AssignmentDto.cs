namespace Application.Dto;

public class AssignmentDto
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public DateTime DueDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    
    public int SubjectId { get; set; }
    public List<GradeDto> Grades { get; set; } = new();
}