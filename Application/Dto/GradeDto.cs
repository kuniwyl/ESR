namespace Application.Dto;

public class GradeDto
{
    public int Id { get; set; }
    public int Value { get; set; }
    public string Description { get; set; } = "";
    public int SubjectId { get; set; }
    public int StudentId { get; set; }
}