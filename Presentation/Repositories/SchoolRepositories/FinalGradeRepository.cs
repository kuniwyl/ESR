using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class FinalGradeRepository: RepositoryBase<FinalGrade>, IFinalGradeRepository
{
    public FinalGradeRepository(SchoolContext context) : base(context)
    {
    }

    public async Task<List<FinalGrade>> GetFinalGradesByCss(int id)
    {
        return await _context.FinalGrades.Where(x => x.ClassSubjectSemesterId == id).ToListAsync();
    }
}