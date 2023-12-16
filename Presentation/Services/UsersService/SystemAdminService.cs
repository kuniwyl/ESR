using Application.Dto.Users;
using Application.IServices;
using Application.IServices.Users;
using AutoMapper;
using Domain.Entities_v2;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories;
using Domain.IRepositories.Users;

namespace Presentation.Services.UsersService;

public class SystemAdminService: BaseService<SystemAdminDto, SystemAdmin>, ISystemAdminService
{
    private readonly IUserRepository _userRepository;
    
    public SystemAdminService(ISystemAdminRepository repository, IMapper mapper, IUserRepository userRepository) : base(repository, mapper)
    {
        _userRepository = userRepository;
    }

    public async Task<ServiceResponse<SystemAdminDto>> Add(CreateUserDto entity)
    {
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            return new ServiceResponse<SystemAdminDto>
            {
                Data = null,
                Message = "Login jest zajęty",
                Success = false
            };
        }
        var systemAdmin = _mapper.Map<SystemAdmin>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        systemAdmin.PasswordHash = password;
        systemAdmin.Role = UserRole.SystemAdmin;
        var result = await _repository.Add(systemAdmin);
        return new ServiceResponse<SystemAdminDto>
        {
            Data = _mapper.Map<SystemAdminDto>(result),
            Message = "",
            Success = true
        };
    }
}