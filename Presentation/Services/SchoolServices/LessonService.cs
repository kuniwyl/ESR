using Application.Dto.School;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;

namespace Presentation.Services.SchoolServices;

public class LessonService: BaseService<LessonDto, Lesson>, ILessonService
{
    public LessonService(ILessonRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(LessonDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(LessonDto entity)
    {
        return true;
    }

    public async Task<ServiceResponse<List<LessonDto>>> GetLessonByCssId(int id)
    {
        var result = await ((ILessonRepository) _repository).GetLessonByCssId(id);
        var mapped = _mapper.Map<List<LessonDto>>(result);
        return new ServiceResponse<List<LessonDto>>
        {
            Success = true,
            Message = "",
            Data = mapped
        };
    }
}