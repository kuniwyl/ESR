using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class Semester: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime Updated { get; set; }
    public Status Status { get; set; } = Status.Active;
    
    public string Name { get; set; } = null!;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    
    public int DailyLessonCount { get; set; }
    public int LessonDuration { get; set; }
    public int BreakDuration { get; set; }
    
    public string LessonStart { get; set; }
    
    public int SchoolId { get; set; }
    public School School { get; set; } = null!;
    
    public virtual List<ClassSubjectSemester> ClassSubjectSemesters { get; set; } = new List<ClassSubjectSemester>();
    public virtual List<Notice> Notices { get; set; } = new List<Notice>();
}