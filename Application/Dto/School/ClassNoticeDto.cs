using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class ClassNoticeDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    
    public int ClassId { get; set; }
    public int SemesterId { get; set; }
    public Days? Days { get; set; }
    public int? Slot { get; set; }
}