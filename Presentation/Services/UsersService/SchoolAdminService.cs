using Application.Dto.Users;
using Application.IServices;
using Application.IServices.Users;
using AutoMapper;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories;
using Domain.IRepositories.Users;

namespace Presentation.Services.UsersService;

public class SchoolAdminService: BaseService<SchoolAdminDto, SchoolAdmin>, ISchoolAdminService
{
    private readonly IUserRepository _userRepository;
    
    public SchoolAdminService(ISchoolAdminRepository repository, IMapper mapper, IUserRepository userRepository) : base(repository, mapper)
    {
        _userRepository = userRepository;
    }
    
    public async Task<ServiceResponse<SchoolAdminDto>> Add(CreateUserDto entity)
    {
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            return new ServiceResponse<SchoolAdminDto>
            {
                Data = null,
                Message = "Login jest zajęty",
                Success = false
            };
        }
        var schoolAdmin = _mapper.Map<SchoolAdmin>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        schoolAdmin.PasswordHash = password;
        schoolAdmin.Role = UserRole.SchoolAdmin;
        var result = await _repository.Add(schoolAdmin);
        return new ServiceResponse<SchoolAdminDto>
        {
            Data = _mapper.Map<SchoolAdminDto>(result),
            Message = "",
            Success = true
        };
    }
}