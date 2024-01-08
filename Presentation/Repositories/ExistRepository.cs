using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;

namespace Presentation.Repositories;

public class ExistRepository: IExistRepository
{
    private readonly IAssignmentRepository _assignmentRepository;
    private readonly IBehaviourGradeRepository _behaviourGradeRepository;
    private readonly IClassNoticeRepository _classNoticeRepository;
    private readonly IClassRepository _classRepository;
    private readonly ICssRepository _cssRepository;
    private readonly IGradeRepository _gradeRepository;
    private readonly INoticeRepository _noticeRepository;
    private readonly ISchoolRepository _schoolRepository;
    private readonly ISemesterRepository _semesterRepository;
    private readonly ISubjectRepository _subjectRepository;
    private readonly IStudentRepository _studentRepository;
    private readonly ITeacherRepository _teacherRepository;
    private readonly IParentRepository _parentRepository;
    private readonly ISystemAdminRepository _systemAdminRepository;
    private readonly ISchoolAdminRepository _schoolAdminRepository;


    public ExistRepository(IAssignmentRepository assignmentRepository, IBehaviourGradeRepository behaviourGradeRepository, IClassNoticeRepository classNoticeRepository, IClassRepository classRepository, ICssRepository cssRepository, IGradeRepository gradeRepository, INoticeRepository noticeRepository, ISchoolRepository schoolRepository, ISemesterRepository semesterRepository, ISubjectRepository subjectRepository, IStudentRepository studentRepository, ITeacherRepository teacherRepository, IParentRepository parentRepository, ISystemAdminRepository systemAdminRepository, ISchoolAdminRepository schoolAdminRepository)
    {
        _assignmentRepository = assignmentRepository;
        _behaviourGradeRepository = behaviourGradeRepository;
        _classNoticeRepository = classNoticeRepository;
        _classRepository = classRepository;
        _cssRepository = cssRepository;
        _gradeRepository = gradeRepository;
        _noticeRepository = noticeRepository;
        _schoolRepository = schoolRepository;
        _semesterRepository = semesterRepository;
        _subjectRepository = subjectRepository;
        _studentRepository = studentRepository;
        _teacherRepository = teacherRepository;
        _parentRepository = parentRepository;
        _systemAdminRepository = systemAdminRepository;
        _schoolAdminRepository = schoolAdminRepository;
    }

    public async Task<bool> IsAssignmentExist(int id)
    {
        return await _assignmentRepository.Exists(id);
    }

    public async Task<bool> IsBehaviorGradeExist(int id)
    {
        return await _behaviourGradeRepository.Exists(id);
    }

    public async Task<bool> IsClassNoticeExist(int id)
    {
        return await _classNoticeRepository.Exists(id);
    }

    public async Task<bool> IsClassExist(int id)
    {
        return await _classRepository.Exists(id);
    }

    public async Task<bool> IsCssExist(int id)
    {
        return await _cssRepository.Exists(id);
    }

    public async Task<bool> IsGradeExist(int id)
    {
        return await _gradeRepository.Exists(id);
    }

    public async Task<bool> IsNoticeExist(int id)
    {
        return await _noticeRepository.Exists(id);
    }

    public async Task<bool> IsSchoolExist(int id)
    {
        return await _schoolRepository.Exists(id);
    }

    public async Task<bool> IsSemesterExist(int id)
    {
        return await _semesterRepository.Exists(id);
    }

    public async Task<bool> IsSubjectExist(int id)
    {
        return await _subjectRepository.Exists(id);
    }

    public async Task<bool> IsStudentExist(int id)
    {
        return await _studentRepository.Exists(id);
    }

    public async Task<bool> IsTeacherExist(int id)
    {
        return await _teacherRepository.Exists(id);
    }

    public async Task<bool> IsParentExist(int id)
    {
        return await _parentRepository.Exists(id);
    }

    public async Task<bool> IsSystemAdminExist(int id)
    {
        return await _systemAdminRepository.Exists(id);
    }

    public async Task<bool> IsSchoolAdminExist(int id)
    {
        return await _schoolAdminRepository.Exists(id);
    }
}