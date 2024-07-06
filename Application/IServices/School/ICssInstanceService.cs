using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface ICssInstanceService: IBaseService<ClassSubjectSemesterInstanceDto, ClassSubjectSemesterInstance>
{
    Task<ServiceResponse<List<ClassSubjectSemesterInstanceDto>>> GetBySemesterIdAndClassId(int semesterId, int classId);
    Task<ServiceResponse<List<ClassSubjectSemesterInstanceDto>>> GetBySemesterAndTeacherId(int semesterId, int teacherId);
    Task<ServiceResponse<List<ClassSubjectSemesterInstanceDto>>> GetByUser();
}