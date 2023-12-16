using Application.Dto.Users;
using Application.IServices;
using Application.IServices.Users;
using AutoMapper;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.IRepositories.Users;

namespace Presentation.Services.UsersService;

public class ParentService: BaseService<ParentDto, Parent>, IParentService
{
    private readonly IUserRepository _userRepository;
    
    public ParentService(IParentRepository repository, IMapper mapper, IUserRepository userRepository) : base(repository, mapper )
    {
        _userRepository = userRepository;
    }

    public async Task<ServiceResponse<ParentDto>> Add(CreateUserDto entity)
    {
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            return new ServiceResponse<ParentDto>
            {
                Data = null,
                Message = "Login jest zajęty",
                Success = false
            };
        }
        var parent = _mapper.Map<Parent>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        parent.PasswordHash = password;
        parent.Role = UserRole.Parent;
        var result = await _repository.Add(parent);
        return new ServiceResponse<ParentDto>
        {
            Data = _mapper.Map<ParentDto>(result),
            Message = "",
            Success = true
        };
    }
}