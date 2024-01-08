using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class LessonRepository: RepositoryBase<Lesson>, ILessonRepository
{
    public LessonRepository(SchoolContext context) : base(context)
    {
    }
}