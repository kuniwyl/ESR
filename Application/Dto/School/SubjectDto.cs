using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class SubjectDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public string TeacherName { get; set; } = "";
    public int TeacherId { get; set; }
    
    public int SchoolId { get; set; }
}