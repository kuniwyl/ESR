using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.Users;

public class Student: SchoolUser
{
    public int ClassId { get; set; }
    public virtual Class Class { get; set; } = null!;
    
    public virtual List<BehaviorGrade> ParentingMarks { get; set; } = new List<BehaviorGrade>();
    
    public virtual List<Grade> Grades { get; set; } = new List<Grade>();
}