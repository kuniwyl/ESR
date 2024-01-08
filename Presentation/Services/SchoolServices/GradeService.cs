using Application.Dto;
using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;

namespace Presentation.Services.SchoolServices;

public class GradeService: BaseService<GradeDto, Grade>, IGradeService
{
    public GradeService(IGradeRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(GradeDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(GradeDto entity)
    {
        return true;
    }
}