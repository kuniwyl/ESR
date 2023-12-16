namespace Domain.Entities_v2.School;

public class Semester: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Name { get; set; } = null!;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    
    public int DailyLessonCount { get; set; }
    public int LessonDuration { get; set; }
    public int BreakDuration { get; set; }
    
    public TimeSpan LessonStart { get; set; }
    
    public int SchoolId { get; set; }
    public School School { get; set; } = null!;
    
    public virtual List<Subject> Subjects { get; set; } = new List<Subject>();
    public virtual List<Notice> Notices { get; set; } = new List<Notice>();
    public virtual List<ClassNotice> ClassNotices { get; set; } = new List<ClassNotice>();
}