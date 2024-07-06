using Domain.Entities_v2.Types;

namespace Application.Dto.Users.Grades;

public class ClassStudentsGradesDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string ClassName { get; set; } = null!;
    public List<StudentGradesDto> Students { get; set; } = new List<StudentGradesDto>();
}