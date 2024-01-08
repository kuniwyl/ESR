using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;

namespace Presentation.Services.SchoolServices;
public class ClassNoticeService: BaseService<ClassNoticeDto, ClassNotice>, IClassNoticeService

{
    public ClassNoticeService(IClassNoticeRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(ClassNoticeDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(ClassNoticeDto entity)
    {
        return true;
    }
}