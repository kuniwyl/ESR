using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface ILessonRepository: IRepository<Lesson>
{
    Task<List<Lesson>> GetLessonByCssId(int id);
}