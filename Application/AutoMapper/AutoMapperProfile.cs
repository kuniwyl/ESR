using Application.Dto;
using Application.Dto.School;
using Application.Dto.Users;
using AutoMapper;
using Domain.Entities_v2;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Users;

namespace Application.AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        // School
        CreateMap<Assignment, AssignmentDto>();
        CreateMap<AssignmentDto, Assignment>();
        
        CreateMap<BehaviorGrade, BehaviorGradeDto>();
        CreateMap<BehaviorGradeDto, BehaviorGrade>();
        
        CreateMap<ClassNotice, ClassNoticeDto>();
        CreateMap<ClassNoticeDto, ClassNotice>();
        
        CreateMap<Class, ClassDto>();
        CreateMap<ClassDto, Class>();
        
        CreateMap<Grade, GradeDto>();
        CreateMap<GradeDto, Grade>();

        CreateMap<Notice, NoticeDto>();
        CreateMap<NoticeDto, Notice>();
        
        CreateMap<School, SchoolDto>();
        CreateMap<SchoolDto, School>();
        
        CreateMap<Semester, SemesterDto>();
        CreateMap<SemesterDto, Semester>();
        
        CreateMap<Subject, SubjectDto>();
        CreateMap<SubjectDto, Subject>();


        CreateMap<Parent, ParentDto>();
        CreateMap<ParentDto, Parent>();
        
        CreateMap<SchoolAdmin, SchoolAdminDto>();
        CreateMap<SchoolAdminDto, SchoolAdmin>();
        
        CreateMap<Student, StudentDto>();
        CreateMap<StudentDto, Student>();
        
        CreateMap<Teacher, TeacherDto>();
        CreateMap<TeacherDto, Teacher>();

        CreateMap<SystemAdmin, SystemAdminDto>();
        CreateMap<SystemAdminDto, SystemAdmin>();
        
        // Users
        CreateMap<Parent, ParentDto>();
        CreateMap<ParentDto, Parent>();
        
        CreateMap<SchoolAdmin, SchoolAdminDto>();
        CreateMap<SchoolAdminDto, SchoolAdmin>();
        
        CreateMap<Student, StudentDto>();
        CreateMap<StudentDto, Student>();
        
        CreateMap<Teacher, TeacherDto>();
        CreateMap<TeacherDto, Teacher>();
        
        CreateMap<SystemAdmin, SystemAdminDto>();
        CreateMap<SystemAdminDto, SystemAdmin>();
        
        CreateMap<Parent, UserShortDto>();
        CreateMap<Teacher, UserShortDto>();
        CreateMap<Student, UserShortDto>();
        CreateMap<SchoolAdmin, UserShortDto>();
        CreateMap<SystemAdmin, UserShortDto>();
        
        CreateMap<CreateUserDto, Parent>();
        CreateMap<CreateUserDto, Teacher>();
        CreateMap<CreateUserDto, Student>();
        CreateMap<CreateUserDto, SchoolAdmin>();
        CreateMap<CreateUserDto, SystemAdmin>();
        
        CreateMap<CreateStudentDto, Student>();
    }
}