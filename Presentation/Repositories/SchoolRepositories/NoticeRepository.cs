using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class NoticeRepository: RepositoryBase<Notice>, INoticeRepository
{
    public NoticeRepository(SchoolContext context) : base(context)
    {
    }
}