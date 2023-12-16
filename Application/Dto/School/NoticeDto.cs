namespace Application.Dto.School;

public class NoticeDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    
    public int SemesterId { get; set; }
    public int? Days { get; set; }
    public int? Slot { get; set; }
}