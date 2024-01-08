using Domain.Entities_v2.Users;

namespace Domain.IRepositories.Users;

public interface IStudentRepository: IRepository<Student>
{
    Task<Student[]> GetStudentsFromClass(int classId);
    Task<Student[]> GetStudentsFromClassWithGradesFromCss(int classId, int cssId);
}