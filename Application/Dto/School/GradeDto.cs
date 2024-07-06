using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class GradeDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public int Value { get; set; }
    public int Weight { get; set; }
    public string Description { get; set; }
    
    public int ClassSubjectSemesterId { get; set; }
    public int StudentId { get; set; }
    
    public string StudentName { get; set; } = "";
}