using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class NoticeDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    
    public int SemesterId { get; set; }
    public DateOnly Date { get; set; }
    public int? Slot { get; set; }
    
    public bool IsNotForAll { get; set; }
    
    public List<ClassNoticeDto> ClassNotices { get; set; } = new List<ClassNoticeDto>();
}