using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface ICssInstanceRepository: IRepository<ClassSubjectSemesterInstance>
{
    Task<List<ClassSubjectSemesterInstance>> GetBySemesterIdAndClassId(int semesterId, int classId);
    Task<List<ClassSubjectSemesterInstance>> GetBySemesterAndTeacherId(int semesterId, int teacherId);
    Task<int> CountByCssId(int cssId);
}