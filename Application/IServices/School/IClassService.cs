using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface IClassService: IBaseService<ClassDto, Class>
{
    Task<ServiceResponse<ClassDto[]>> GetClassesFromSchool(int schoolId);
}