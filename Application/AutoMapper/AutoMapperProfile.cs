using Application.Dto;
using AutoMapper;
using Domain.Entities;

namespace Application.AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<IUser, UserDto>();
        CreateMap<UserDto, IUser>();

        CreateMap<Student, UserShortDto>();
        CreateMap<Teacher, UserShortDto>();
        CreateMap<Parent, UserShortDto>();
        CreateMap<UserShortDto, Student>();
        CreateMap<UserShortDto, Teacher>();
        CreateMap<UserShortDto, Parent>();
        
        CreateMap<Student, UserDto>();
        CreateMap<Teacher, UserDto>();
        CreateMap<Parent, UserDto>();
        CreateMap<UserDto, Student>();
        CreateMap<UserDto, Teacher>();
        CreateMap<UserDto, Parent>();
        
        CreateMap<Parent, ParentDto>().ForMember(x => x.Student, opt => opt.MapFrom(src => src.Student));
        CreateMap<ParentDto, Parent>();
        
        CreateMap<RegisterDto, Student>();
        CreateMap<RegisterDto, Teacher>();
        CreateMap<RegisterDto, Parent>();

        CreateMap<SchoolAdmin, UserDto>();
        CreateMap<UserDto, SchoolAdmin>();

        CreateMap<School, SchoolDto>();
        CreateMap<School, SchoolDataDto>();
        
        CreateMap<Subject, SubjectDto>().ForMember(x => x.Teacher, opt => opt.MapFrom(src => src.Teacher));
        CreateMap<SubjectDto, Subject>();

        CreateMap<Class, ClassDto>().ForMember(x => x.Teacher, opt => opt.MapFrom(src => src.Teacher));
        CreateMap<ClassDto, Class>();
    }
}