namespace Application.Dto.School;

public class GradesFinalDto
{
    public List<GradeDto> Grades { get; set; } = null!;
    public List<FinalGradeDto> FinalGrades { get; set; } = null!;
}