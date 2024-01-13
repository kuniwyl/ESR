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
    private IFinalGradeRepository _finalGradeRepository;
    
    public GradeService(IGradeRepository repository, IFinalGradeRepository finalGradeRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _finalGradeRepository = finalGradeRepository;
    }

    public override async void Validate(GradeDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(GradeDto entity)
    {
        return true;
    }

    public async Task<ServiceResponse<GradesFinalDto>> GetGradesByGradeId(int id)
    {
        var response = new ServiceResponse<GradesFinalDto>();
        var grades = await ((IGradeRepository) _repository).GetGradesByCss(id);
        var finalGrades = await _finalGradeRepository.GetFinalGradesByCss(id);
        var gradesFinalDto = new GradesFinalDto
        {
            Grades = _mapper.Map<List<GradeDto>>(grades),
            FinalGrades = _mapper.Map<List<FinalGradeDto>>(finalGrades)
        };
        response.Data = gradesFinalDto;
        
        return response;
    }
}