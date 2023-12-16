using Application.Dto.School;

namespace Application.IServices.School;

public interface ISchoolService: IBaseService<SchoolDto, Domain.Entities_v2.School.School>
{
}