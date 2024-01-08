using Application.Dto.School;

namespace Application.Dto.Users.Grades;

public class StudentGradesDto: StudentDto
{
    public List<GradeStudentDto> Grades { get; set; } = new List<GradeStudentDto>();
}