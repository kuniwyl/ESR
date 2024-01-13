using Domain.Entities_v2.School;

namespace Application.Dto.School;

public class UserSubjects
{
    public ClassSubjectSemesterDto[] ClassSubjectSemesters { get; set; } = null!;
    public FinalGradeDto[] FinalGrades { get; set; } = null!;
    public GradeDto[] Grades { get; set; } = null!;
    public PresenceDto[] Presences { get; set; } = null!;
}