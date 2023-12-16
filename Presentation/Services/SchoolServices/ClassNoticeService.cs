using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Services.SchoolServices;

public class ClassNoticeService: BaseService<ClassNoticeDto, ClassNotice>, IClassNoticeService
{
    public ClassNoticeService(IClassNoticeRepository repository, IMapper mapper) : base(repository, mapper)
    {
    }
}