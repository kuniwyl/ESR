namespace Application.Dto.School;

public class GradeDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public int Value { get; set; }
    public int Weight { get; set; }
    public string Description { get; set; } = "";
    
    public int AssignmentId { get; set; }
    public int StudentId { get; set; }
}