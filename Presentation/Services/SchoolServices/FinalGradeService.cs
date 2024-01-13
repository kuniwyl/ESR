using Application.Dto.School;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Services.SchoolServices;

public class FinalGradeService: BaseService<FinalGradeDto, FinalGrade>, IFinalGradeService
{
    public FinalGradeService(IFinalGradeRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override void Validate(FinalGradeDto entity)
    {
        return;
    }

    public override async Task<bool> Authorize(FinalGradeDto entity)
    {
        return true;
    }
}