using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class LessonRepository: RepositoryBase<Lesson>, ILessonRepository
{
    public LessonRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<List<Lesson>> GetLessonByCssId(int id)
    {
        return await _context.Lessons
            .Include(x => x.Presences)
            .Where(x => x.ClassSubjectSemesterId == id)
            .Where(x => x.Status != Status.Deleted)
            .ToListAsync();
    }
}