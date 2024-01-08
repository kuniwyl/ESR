using Domain.Entities_v2.Types;
using Domain.Models;

namespace Application.Dto.School;

public class PresenceDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; } 
    
    public PresenceStatus PresenceStatus { get; set; } = PresenceStatus.Absent;
    
    public string LessonName { get; set; } = null!;
    public int LessonId { get; set; }
    
    public string StudentName { get; set; } = null!;
    public int StudentId { get; set; }
}