using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface ISemesterRepository: IRepository<Semester>
{
    Task<Semester[]> GetSemestersBySchoolId(int schoolId);
    Task<Semester> GetSemesterCurrentSemester(int schoolId);
    
}