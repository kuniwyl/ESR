using Application.Dto.Users;

namespace Application.Dto.School;

public class BehaviorGradeDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    
    public int Value { get; set; }
    
    public StudentDto Student { get; set; } = null!;
    public TeacherDto Teacher { get; set; } = null!;
}