using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class SubjectDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    
    public int SemesterId { get; set; }
    
    public Days Day { get; set; }
    public int Slot { get; set; }
    
    public int TeacherId { get; set; }
    public int ClassId { get; set; }
}