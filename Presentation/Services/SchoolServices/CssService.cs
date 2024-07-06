using Application.Dto;
using Application.Dto.School;
using Application.Dto.Users;
using Application.Dto.Users.Grades;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;
using Domain.Models;
using Microsoft.VisualBasic.CompilerServices;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class CssService: BaseService<ClassSubjectSemesterDto, ClassSubjectSemester>, ICssService
{
    private readonly ISemesterRepository _semesterRepository;
    private readonly IClassRepository _classRepository;
    private readonly IUserRepository _userRepository;
    private readonly IGradeRepository _gradeRepository;
    private readonly ILessonRepository _lessonRepository;
    
    public CssService(ICssRepository repository, IUserRepository userRepository, IGradeRepository gradeRepository, ILessonRepository lessonRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor, IClassRepository classRepository, ISemesterRepository semesterRepository) : base(repository, mapper, existRepository, contextAccessor)
    {
        _classRepository = classRepository;
        _userRepository = userRepository;
        _semesterRepository = semesterRepository;
        _gradeRepository = gradeRepository;
        _lessonRepository = lessonRepository;
    }
 
    public async Task<ServiceResponse<ClassSubjectSemesterDto[]>> GetCssFromClassAndSemester(int classId, int semesterId)
    {
        var css = await ((ICssRepository) _repository).GetCssFromClassAndSemester(classId, semesterId);
        var cssDto = _mapper.Map<ClassSubjectSemesterDto[]>(css);
        return new ServiceResponse<ClassSubjectSemesterDto[]>
        {
            Data = cssDto,
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<ClassSubjectSemesterDto[]>> GetCssFromTeacher(int teacherId, int semesterId)
    {
        var css = await ((ICssRepository) _repository).GetCssFromTeacher(teacherId, semesterId);
        var cssDto = _mapper.Map<ClassSubjectSemesterDto[]>(css);
        return new ServiceResponse<ClassSubjectSemesterDto[]>
        {
            Data = cssDto,
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<ClassSubjectSemesterDto[]>> GetCssFromUser()
    {
        var userId = _contextAccessor.GetUserId();
        var schoolId = _contextAccessor.GetSchoolId();
        var semseterId = await _semesterRepository.GetSemesterCurrentSemester(schoolId);
        var user = await _userRepository.GetById(IntegerType.FromString(userId));
        
        if (semseterId == null) throw new ValidationException<SemesterDto>("Semester not found");
        if (user == null) throw new ValidationException<UserDto>("User not found");
        
        Console.WriteLine(user.Role);
        if (user.Role == UserRole.Teacher)
        {
            var css = await ((ICssRepository) _repository).GetCssFromTeacher(user.Id, semseterId.Id);
            var cssDto = _mapper.Map<ClassSubjectSemesterDto[]>(css);
            return new ServiceResponse<ClassSubjectSemesterDto[]>
            {
                Data = cssDto,
                Message = "",
                Success = true
            };
        } else if (user.Role == UserRole.Student)
        {
            var css = await ((ICssRepository) _repository).GetCssFromClassAndSemester(((user as Student)!).ClassId, semseterId.Id);
            var cssDto = _mapper.Map<ClassSubjectSemesterDto[]>(css);
            return new ServiceResponse<ClassSubjectSemesterDto[]>
            {
                Data = cssDto,
                Message = "",
                Success = true
            };
        } else if (user.Role == UserRole.Parent)
        {
            var student = await _userRepository.GetById(((Parent) user).StudentId);
            if (student == null) throw new ValidationException<StudentDto>("Student not found");
            var css = await ((ICssRepository) _repository).GetCssFromClassAndSemester(((student as Student)!).ClassId, semseterId.Id);
            var cssDto = _mapper.Map<ClassSubjectSemesterDto[]>(css);
            return new ServiceResponse<ClassSubjectSemesterDto[]>
            {
                Data = cssDto,
                Message = "",
                Success = true
            };
        } else
        {
            throw new ValidationException<ClassSubjectSemesterDto>("User role is invalid");
        }
    }

    public async Task<ServiceResponse<ClassStudentsGradesDto>> GetGradesFromCss(int cssId)
    {
        var css = await _repository.GetById(cssId);
        if (css == null) throw new ValidationException<ClassStudentsGradesDto>("ClassSubjectSemester not found");
        var grades = await ((ICssRepository) _repository).GetGradesFromCss(cssId);
        var gradesDto = _mapper.Map<ClassStudentsGradesDto>(grades);
        return new ServiceResponse<ClassStudentsGradesDto>
        {
            Data = gradesDto,
            Message = "",
            Success = true
        };
    }

    public override async void Validate(ClassSubjectSemesterDto entity)
    {
        throw new NotAuthorizedException<ClassSubjectSemester>("You are not authorized to do this action");
    }

    public async override Task<bool> Authorize(ClassSubjectSemesterDto entity)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var classId = entity.ClassId;
        var semesterId = entity.SemesterId;
        var classO = await _classRepository.GetById(classId);
        var semesterO = await _semesterRepository.GetById(semesterId);
        if (classO == null || semesterO == null) return false;
        return classO.SchoolId == schoolId && semesterO.SchoolId == schoolId;
    }
}