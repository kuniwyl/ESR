using Application.Dto.Users;
using Application.IServices;
using Application.IServices.Users;
using AutoMapper;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories;
using Domain.IRepositories.Users;

namespace Presentation.Services.UsersService;

public class TeacherService: BaseService<TeacherDto, Teacher>, ITeacherService
{
    private readonly IUserRepository _userRepository;
    
    public TeacherService(ITeacherRepository repository, IMapper mapper, IUserRepository userRepository) : base(repository, mapper)
    {
        _userRepository = userRepository;
    }

    public async Task<ServiceResponse<TeacherDto>> Add(CreateUserDto entity)
    {
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            return new ServiceResponse<TeacherDto>
            {
                Data = null,
                Message = "Login jest zajęty",
                Success = false
            };
        }
        var teacher = _mapper.Map<Teacher>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        teacher.PasswordHash = password;
        teacher.Role = UserRole.Teacher;
        var result = await _repository.Add(teacher);
        return new ServiceResponse<TeacherDto>
        {
            Data = _mapper.Map<TeacherDto>(result),
            Message = "",
            Success = true
        };
    }
}