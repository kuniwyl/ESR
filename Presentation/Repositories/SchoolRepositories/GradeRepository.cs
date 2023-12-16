using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class GradeRepository: RepositoryBase<Grade>, IGradeRepository
{
    public GradeRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<Grade> GetGradesByStudentId(int semesterId, int studentId)
    {
        throw new NotImplementedException();
    }
}