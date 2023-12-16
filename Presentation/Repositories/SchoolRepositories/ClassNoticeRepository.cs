using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class ClassNoticeRepository: RepositoryBase<ClassNotice>, IClassNoticeRepository
{
    public ClassNoticeRepository(SchoolContext context) : base(context)
    {
    }
}