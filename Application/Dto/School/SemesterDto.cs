namespace Application.Dto.School;

public class SemesterDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Name { get; set; } = null!;
    public DateTime Start { get; set; }
    public DateTime End { get; set; }
    
    public int DailyLessonCount { get; set; }
    public int LessonDuration { get; set; }
    public int BreakDuration { get; set; }
    
    public TimeSpan LessonStart { get; set; }
    
    public int SchoolId { get; set; }
}