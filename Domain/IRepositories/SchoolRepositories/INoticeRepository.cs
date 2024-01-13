using Domain.Entities_v2.School;

namespace Domain.IRepositories.SchoolRepositories;

public interface INoticeRepository: IRepository<Notice>
{
    Task<List<Notice>> GetNoticesFromSchoolAndSemester(int semeterId);
    Task<bool> AddNoticeToClass(Notice notice, int classId);
    Task<bool> RemoveNoticeFromClass(Notice notice, int classId);
    Task<List<Notice>> GetNoticesFromSemesterBetweenDates(int semesterId, DateTime fromDate, DateTime toDate);
    Task<List<Notice>> GetNoticesFromSemesterBetweenDatesAndClassId(int semesterId, DateTime fromDate, DateTime toDate, int classId);

    Task<List<Notice>> GetNoticesFromClassAndSemester(int semesterId, int studentClassId);
}