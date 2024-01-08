using Application.Dto.School;
using Application.Dto.Users.Grades;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface ICssService: IBaseService<ClassSubjectSemesterDto, ClassSubjectSemester>
{
    Task<ServiceResponse<ClassSubjectSemesterDto[]>> GetCssFromClassAndSemester(int classId, int semesterId);
    Task<ServiceResponse<ClassSubjectSemesterDto[]>> GetCssFromTeacher(int teacherId, int semesterId);
    Task<ServiceResponse<ClassSubjectSemesterDto[]>> GetCssFromUser();
    Task<ServiceResponse<ClassStudentsGradesDto>> GetGradesFromCss(int cssId);
}