using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface ILessonService: IBaseService<LessonDto, Lesson>
{
    Task<ServiceResponse<List<LessonDto>>> GetLessonByCssId(int id);
}