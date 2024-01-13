using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface IGradeService: IBaseService<GradeDto, Grade>
{
    Task<ServiceResponse<GradesFinalDto>> GetGradesByGradeId(int id);
}