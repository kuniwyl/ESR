using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class ClassNoticeDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public int ClassId { get; set; }
    
    public int NoticeId { get; set; }
}