using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface IAssignmentService: IBaseService<AssignmentDto, Assignment>
{
    Task<ServiceResponse<AssignmentDto[]>> GetByCssId(int cssId);
}