using System.Globalization;
using Application.DB.DataContext;
using Application.Dto.School;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.IRepositories.SchoolRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories.SchoolRepositories;

public class NoticeRepository: RepositoryBase<Notice>, INoticeRepository
{
    public NoticeRepository(SchoolContext context) : base(context)
    {
    }

    public async new Task<Notice?> GetById(int id)
    {
        return await _context.Notices
            .Include(n => n.ClassNotices)
            .Where(n => n.Status != Status.Deleted)
            .Where(n => n.Id == id)
            .FirstOrDefaultAsync();
    }

    public async Task<List<Notice>> GetNoticesFromSchoolAndSemester(int semesterId)
    {
        return await _context.Notices
            .Include(n => n.ClassNotices)
            .Where(n => n.SemesterId == semesterId)
            .Where(n => n.Status != Status.Deleted)
            .ToListAsync();
    }

    public async Task<bool> AddNoticeToClass(Notice notice, int classId)
    {
        var classNotice = new ClassNotice
        {
            Created = DateTime.UtcNow,
            Updated = DateTime.UtcNow,
            Status = Status.Active,
            ClassId = classId,
            Notice = notice,
        };
        await _context.ClassNotices.AddAsync(classNotice);
        return true;
    }

    public async Task<bool> RemoveNoticeFromClass(Notice notice, int classId)
    {
        var classNotice = await _context.ClassNotices
            .Where(cn => cn.ClassId == classId)
            .Where(cn => cn.NoticeId == notice.Id)
            .FirstOrDefaultAsync();
        if (classNotice == null)
        {
            return false;
        }
        _context.ClassNotices.Remove(classNotice);
        return true;
    }

    public async Task<List<Notice>> GetNoticesFromSemesterBetweenDates(int semesterId, DateTime fromDate, DateTime toDate)
    {
        var fromDateOnly = new DateOnly(fromDate.Year, fromDate.Month, fromDate.Day);
        var toDateOnly = new DateOnly(toDate.Year, toDate.Month, toDate.Day);
        return await _context.Notices
            .Include(n => n.ClassNotices)
            .Where(n => n.SemesterId == semesterId)
            .Where(n => n.IsNotForAll == false)
            .Where(n => n.Status != Status.Deleted)
            .Where(n => n.Date >= fromDateOnly)
            .Where(n => n.Date <= toDateOnly)
            .ToListAsync();
    }

    public async Task<List<Notice>> GetNoticesFromSemesterBetweenDatesAndClassId(int semesterId, DateTime fromDate, DateTime toDate, int classId)
    {
        var fromDateOnly = new DateOnly(fromDate.Year, fromDate.Month, fromDate.Day);
        var toDateOnly = new DateOnly(toDate.Year, toDate.Month, toDate.Day);
        return await _context.Notices
            .Include(n => n.ClassNotices)
            .Where(n => n.SemesterId == semesterId)
            .Where(n => n.Status != Status.Deleted)
            .Where(n => n.Date >= fromDateOnly)
            .Where(n => n.Date <= toDateOnly)
            .Where(n => n.ClassNotices.Any(cn => cn.ClassId == classId) || n.IsNotForAll == false)
            .ToListAsync();
    }

    public async Task<List<Notice>> GetNoticesFromClassAndSemester(int semesterId, int studentClassId)
    {
        return await _context.Notices
            .Include(n => n.ClassNotices)
            .Where(n => n.SemesterId == semesterId)
            .Where(n => n.Status != Status.Deleted)
            .Where(n => n.ClassNotices.Any(cn => cn.ClassId == studentClassId) || n.IsNotForAll == false)
            .ToListAsync();
    }
}