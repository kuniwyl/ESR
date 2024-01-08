using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class ClassSubjectSemesterInstanceDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; } 
    
    public Days Day { get; set; }
    public int Slot { get; set; }
    
    public string SubjectName { get; set; } = "";
    public string TeacherName { get; set; } = "";
    public string ClassName { get; set; } = "";
    public string? TeacherId { get; set; }
    
    public int ClassSubjectSemesterId { get; set; }
}