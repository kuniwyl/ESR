using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class LessonDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; } 
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public List<PresenceDto> Presences { get; set; } = null!;
}