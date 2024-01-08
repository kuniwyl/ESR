using Application.Dto.School;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class BehaviorGradeService: BaseService<BehaviorGradeDto, BehaviorGrade>, IBehaviorGradeService
{
    public BehaviorGradeService(IBehaviourGradeRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(BehaviorGradeDto entity)
    {
        throw new Exception("Not implemented");
    }

    public async override Task<bool> Authorize(BehaviorGradeDto entity)
    {
        return true;
    }
}