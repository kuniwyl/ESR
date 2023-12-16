namespace Application.Dto.School;

public class AssignmentDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public int SubjectId { get; set; }
    
    public virtual List<GradeDto> Grades { get; set; } = new List<GradeDto>();
}