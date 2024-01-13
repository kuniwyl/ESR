namespace Domain.IRepositories;

public interface IExistRepository
{
    Task<bool> IsBehaviorGradeExist(int id);
    Task<bool> IsClassExist(int id);
    Task<bool> IsCssExist(int id);
    Task<bool> IsGradeExist(int id);
    Task<bool> IsNoticeExist(int id);
    Task<bool> IsSchoolExist(int id);
    Task<bool> IsSemesterExist(int id);
    Task<bool> IsSubjectExist(int id);
    
    Task<bool> IsStudentExist(int id);
    Task<bool> IsTeacherExist(int id);
    Task<bool> IsParentExist(int id);
    Task<bool> IsSystemAdminExist(int id);
    Task<bool> IsSchoolAdminExist(int id);
}