namespace Application.Dto.School;

public class SubjectSingleDto: SubjectDto
{
    public List<AssignmentDto> Assignments { get; set; } = null!;
}