using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.Users;

public class Student: SchoolUser
{
    public string Pesel { get; set; } = "";
    
    public int ClassId { get; set; }
    public virtual Class Class { get; set; } = null!;
    
    public virtual Parent Parent { get; set; } = null!;
    public virtual List<BehaviorGrade> ParentingMarks { get; set; } = new List<BehaviorGrade>();
    public virtual List<Presence> Presences { get; set; } = new List<Presence>();
    public virtual List<FinalGrade> FinalGrades { get; set; } = new List<FinalGrade>();
    public virtual List<Grade> Grades { get; set; } = new List<Grade>();
}