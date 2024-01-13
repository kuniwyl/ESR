using Application.Dto;
using Application.Dto.School;
using Application.Dto.Users;
using AutoMapper;
using Domain.Entities_v2;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;

namespace Application.AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        // School
        CreateMap<Address, AddressDto>();
        CreateMap<AddressDto, Address>();
        
        CreateMap<Lesson, LessonDto>()
            .ForMember(opt => opt.Presences, opt => opt.MapFrom(src => src.Presences));
        CreateMap<LessonDto, Lesson>();

        CreateMap<Presence, PresenceDto>()
            .ForMember(opt => opt.StudentName,
                opt => opt.MapFrom(src => (src.Student.FirstName + " " + src.Student.LastName)))
            .ForMember(opt => opt.LessonName, opt => opt.MapFrom(src => src.Lesson.Name))
            .ForMember(opt => opt.CssId, opt => opt.MapFrom(src => src.Lesson.ClassSubjectSemesterId));
        CreateMap<PresenceDto, Presence>();

        CreateMap<FinalGrade, FinalGradeDto>();
        CreateMap<FinalGradeDto, FinalGrade>();
        
        CreateMap<BehaviorGrade, BehaviorGradeDto>();
        CreateMap<BehaviorGradeDto, BehaviorGrade>();

        CreateMap<Class, ClassDto>().ForMember(x => x.TeacherName,
            opt => opt.MapFrom(src => (src.Teacher.FirstName + " " + src.Teacher.LastName)));
        CreateMap<ClassDto, Class>();

        CreateMap<Grade, GradeDto>()
            .ForMember(opt => opt.StudentName,
                opt => opt.MapFrom(src => (src.Student.FirstName + " " + src.Student.LastName)));
        CreateMap<GradeDto, Grade>();

        CreateMap<Notice, NoticeDto>()
            .ForMember(opt => opt.ClassNotices, opt => opt.MapFrom(src => src.ClassNotices));
        CreateMap<NoticeDto, Notice>();
        
        CreateMap<ClassNotice, ClassNoticeDto>();
        CreateMap<ClassNoticeDto, ClassNotice>();
        
        CreateMap<School, SchoolDto>()
            .ForMember(x => x.Address, opt => opt.MapFrom(src => src.Address))
            .ForMember(x => x.AdminCount, opt => opt.MapFrom(src => src.SchoolUsers.Count));
        CreateMap<SchoolDto, School>()
            .ForMember(x => x.Address, opt => opt.MapFrom(src => src.Address));
        
        CreateMap<Semester, SemesterDto>();
        CreateMap<SemesterDto, Semester>();

        CreateMap<Subject, SubjectDto>().ForMember(x => x.TeacherName,
            opt => opt.MapFrom(src => (src.Teacher.FirstName + " " + src.Teacher.LastName)));
        CreateMap<SubjectDto, Subject>();


        CreateMap<Parent, ParentDto>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<ParentDto, Parent>();

        CreateMap<SchoolAdmin, SchoolAdminDto>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<SchoolAdminDto, SchoolAdmin>();
        
        CreateMap<Student, StudentDto>()
            .ForMember(opt => opt.Parent, opt => opt.MapFrom(src => src.Parent))
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<StudentDto, Student>();
        
        CreateMap<Teacher, TeacherDto>();
        CreateMap<TeacherDto, Teacher>();

        CreateMap<SystemAdmin, SystemAdminDto>();
        CreateMap<SystemAdminDto, SystemAdmin>();

        CreateMap<ClassSubjectSemesterDto, ClassSubjectSemester>();
        CreateMap<ClassSubjectSemester, ClassSubjectSemesterDto>()
            .ForMember(x => x.TeacherName,
                opt => opt.MapFrom(src => (src.Subject.Teacher.FirstName + " " + src.Subject.Teacher.LastName)))
            .ForMember(x => x.SubjectName, opt => opt.MapFrom(src => src.Subject.Name))
            .ForMember(x => x.ClassName, opt => opt.MapFrom(src => src.Class.NameId))
            .ForMember(opt => opt.TeacherId, opt => opt.MapFrom(src => src.Subject.TeacherId));
        
        CreateMap<ClassSubjectSemesterInstanceDto, ClassSubjectSemesterInstance>();
        CreateMap<ClassSubjectSemesterInstance, ClassSubjectSemesterInstanceDto>()
            .ForMember(opt => opt.TeacherName,
                opt => opt.MapFrom(src =>
                    src.ClassSubjectSemester.Subject.Teacher.FirstName + " " +
                    src.ClassSubjectSemester.Subject.Teacher.LastName))
            .ForMember(opt => opt.SubjectName, opt => opt.MapFrom(src => src.ClassSubjectSemester.Subject.Name))
            .ForMember(opt => opt.TeacherId, opt => opt.MapFrom(src => src.ClassSubjectSemester.Subject.TeacherId))
            .ForMember(opt => opt.ClassName, opt => opt.MapFrom(src => src.ClassSubjectSemester.Class.NameId));
        // Users
        CreateMap<CreateParentDto, Parent>();
        CreateMap<Parent, ParentDto>();
        CreateMap<ParentDto, Parent>();
        
        CreateMap<SchoolAdmin, SchoolAdminDto>();
        CreateMap<SchoolAdmin, UserDto>();
        CreateMap<SchoolAdminDto, SchoolAdmin>();
        
        CreateMap<Student, StudentDto>();
        CreateMap<StudentDto, Student>();

        CreateMap<Teacher, TeacherDto>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<Teacher, UserDto>();
        CreateMap<TeacherDto, Teacher>();

        CreateMap<SystemAdmin, SystemAdminDto>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<SystemAdminDto, SystemAdmin>();
        
        CreateMap<Parent, UserShortDto>();
        CreateMap<Teacher, UserShortDto>();
        CreateMap<Student, UserShortDto>();
        CreateMap<SchoolAdmin, UserShortDto>();
        CreateMap<SystemAdmin, UserShortDto>();
        
        CreateMap<CreateUserDto, Parent>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<CreateUserDto, Teacher>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<CreateUserDto, Student>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<CreateUserDto, SchoolAdmin>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<CreateUserDto, SystemAdmin>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address));
        
        CreateMap<CreateStudentDto, Student>()
            .ForMember(opt => opt.Address, opt => opt.MapFrom(src => src.Address))
            .ForMember(opt => opt.Parent, opt => opt.MapFrom(src => src.Parent));
        
            
        // Addition
        CreateMap<School, SchoolWithAdminsDto>()
            .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address))
            .ForMember(dest => dest.Admins, opt => opt.MapFrom(src => src.SchoolUsers.Where(sh => sh.Role == UserRole.SchoolAdmin)))
            .ForMember(dest => dest.AdminCount, opt => opt.MapFrom(src => src.SchoolUsers.Count(sh => sh.Role == UserRole.SchoolAdmin)));
        CreateMap<SchoolWithAdminsDto, School>()
            .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address)); ;
        
        // Grades
        
    }
}