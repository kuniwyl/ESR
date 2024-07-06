using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class SemesterDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Name { get; set; } = null!;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    
    public int DailyLessonCount { get; set; }
    public int LessonDuration { get; set; }
    public int BreakDuration { get; set; }
    
    public string LessonStart { get; set; }
    
    public int SchoolId { get; set; }
}