using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.Users;

public class Teacher: SchoolUser
{
    public int ClassId { get; set; }
    public virtual Class Class { get; set; } = null!;
    
    public virtual List<Subject> Subjects { get; set; } = new List<Subject>();
    
    public virtual List<BehaviorGrade> ParentingMarks { get; set; } = new List<BehaviorGrade>();
}