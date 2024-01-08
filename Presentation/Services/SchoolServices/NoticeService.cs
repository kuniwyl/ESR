using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;

namespace Presentation.Services.SchoolServices;

public class NoticeService: BaseService<NoticeDto, Notice>, INoticeService
{
    public NoticeService(INoticeRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(NoticeDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(NoticeDto entity)
    {
        return true;
    }
}