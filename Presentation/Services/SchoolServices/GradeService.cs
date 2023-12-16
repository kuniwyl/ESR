using Application.Dto;
using Application.Dto.School;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Services.SchoolServices;

public class GradeService: BaseService<GradeDto, Grade>, IGradeService
{
    public GradeService(IGradeRepository repository, IMapper mapper) : base(repository, mapper)
    {
    }
}