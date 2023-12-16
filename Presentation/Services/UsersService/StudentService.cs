using Application.Dto.Users;
using Application.IServices;
using Application.IServices.Users;
using AutoMapper;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories;
using Domain.IRepositories.Users;

namespace Presentation.Services.UsersService;

public class StudentService: BaseService<StudentDto, Student>, IStudentService
{
    private readonly IUserRepository _userRepository;
    
    public StudentService(IStudentRepository repository, IMapper mapper, IUserRepository userRepository) : base(repository, mapper)
    {
        _userRepository = userRepository;
    }

    public async Task<ServiceResponse<StudentDto>> Add(CreateUserDto entity)
    {
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            return new ServiceResponse<StudentDto>
            {
                Data = null,
                Message = "Login jest zajęty",
                Success = false
            };
        }
        var student = _mapper.Map<Student>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        student.PasswordHash = password;
        student.Role = UserRole.Student;
        var result = await _repository.Add(student);
        return new ServiceResponse<StudentDto>
        {
            Data = _mapper.Map<StudentDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<StudentDto>> Create(CreateStudentDto dto)
    {
        var isLoginExist = await _userRepository.IsLoginExist(dto.Login);
        if (isLoginExist)
        {
            return new ServiceResponse<StudentDto>
            {
                Data = null,
                Message = "Login jest zajęty",
                Success = false
            };
        }
        var student = _mapper.Map<Student>(dto);
        var password = BCrypt.Net.BCrypt.HashPassword(dto.Password);
        Console.WriteLine(student.ClassId);
        student.PasswordHash = password;
        student.Role = UserRole.Student;
        var result = await _repository.Add(student);
        return new ServiceResponse<StudentDto>
        {
            Data = _mapper.Map<StudentDto>(result),
            Message = "",
            Success = true
        };
    }
}