using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Models;

namespace Application.IServices.School;

public interface INoticeService: IBaseService<NoticeDto, Notice>
{
    Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromSchoolAndSemester(int semesterId);
    Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromSemesterBetweenDates(int semesterId, DateTime fromDate, DateTime toDate);
    Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromUserAndSemester(int semesterId);
    Task<ServiceResponse<List<NoticeDto>>> GetNoticesFromSemesterBetweenDatesByUser(int semesterId, DateTime fromDate, DateTime toDate);
}