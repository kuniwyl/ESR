using Application.Dto.School;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;

namespace Presentation.Services.SchoolServices;

public class PresenceService: BaseService<PresenceDto, Presence>, IPresenceService
{
    public PresenceService(IPresenceRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(PresenceDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(PresenceDto entity)
    {
        return true;
    }
}