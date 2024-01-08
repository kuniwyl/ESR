using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class ClassSubjectSemesterDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; } 
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public int Count { get; set; }
    public int ClassId { get; set; }
    public int SubjectId { get; set; }
    public int SemesterId { get; set; }
    
    public int? TeacherId { get; set; }
    public string TeacherName { get; set; } = "";
    public string SubjectName { get; set; } = "";
    public string ClassName { get; set; } = "";
    
    public List<ClassSubjectSemesterInstanceDto>? ClassSubjectSemesterInstances { get; set; } = null!;
}