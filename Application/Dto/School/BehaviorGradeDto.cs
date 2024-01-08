using Application.Dto.Users;
using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class BehaviorGradeDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public int Value { get; set; }
    
    public StudentDto Student { get; set; } = null!;
    public TeacherDto Teacher { get; set; } = null!;
}