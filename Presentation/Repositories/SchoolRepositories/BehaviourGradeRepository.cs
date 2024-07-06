using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class BehaviourGradeRepository: RepositoryBase<BehaviorGrade>, IBehaviourGradeRepository
{
    public BehaviourGradeRepository(SchoolContext context) : base(context)
    {
    }
}