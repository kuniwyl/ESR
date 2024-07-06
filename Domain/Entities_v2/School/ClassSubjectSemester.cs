using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class ClassSubjectSemester: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public int Count { get; set; }
    public int SubjectId { get; set; }
    public int ClassId { get; set; }
    public int SemesterId { get; set; }
    
    public virtual List<ClassSubjectSemesterInstance> ClassSubjectSemesterInstances { get; set; } = null!;
    public virtual List<Grade> Grades { get; set; } = null!;
    public virtual List<Lesson> Lessons { get; set; } = null!;
    public virtual List<FinalGrade> FinalGrades { get; set; } = null!;
    
    public virtual Class Class { get; set; } = null!;
    public virtual Subject Subject { get; set; } = null!;
    public virtual Semester Semester { get; set; } = null!;
    
}