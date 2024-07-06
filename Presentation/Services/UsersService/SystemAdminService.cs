using Application.Dto.Users;
using Application.Exceptions;
using Application.IServices.Users;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.IRepositories.Users;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.UsersService;

public class SystemAdminService: BaseService<SystemAdminDto, SystemAdmin>, ISystemAdminService
{
    private readonly IUserRepository _userRepository;
    private readonly IAddressRepository _addressRepository;

    public SystemAdminService(ISystemAdminRepository repository, IAddressRepository addressRepository, IMapper mapper, IExistRepository existRepository, IUserRepository userRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
        _addressRepository = addressRepository;
    }
    
    public new async Task<ServiceResponse<SystemAdminDto>> Get(int id)
    {
        var result = await ((ISystemAdminRepository) _repository).GetById(id);
        if (result == null)
        {
            throw new ObjectNotFoundException<SystemAdmin>(id);
        }
        return new ServiceResponse<SystemAdminDto>
        {
            Data = _mapper.Map<SystemAdminDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<SystemAdminDto>> Add(CreateUserDto entity)
    {
        Console.WriteLine("Add SystemAdmin");
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            throw new UserExistException(entity.Login);
        }
        
        var address = _mapper.Map<Address>(entity.Address);
        await _addressRepository.Add(address);
        
        var systemAdmin = _mapper.Map<SystemAdmin>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        systemAdmin.AddressId = address.Id;
        systemAdmin.Address = address;
        systemAdmin.PasswordHash = password;
        systemAdmin.Role = UserRole.SystemAdmin;
        var result = await _repository.Add(systemAdmin);
        await _repository.SaveChanges();
        return new ServiceResponse<SystemAdminDto>
        {
            Data = _mapper.Map<SystemAdminDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<SystemAdminDto>> Update(int id, SystemAdminDto entity)
    {
        var address = await _addressRepository.GetById(entity.Address.Id);
        if (address == null)
        {
            throw new ObjectNotFoundException<Address>(entity.Id);
        }
        
        var systemAdmin = await _repository.GetById(id);
        if (systemAdmin == null)
        {
            throw new ObjectNotFoundException<SystemAdmin>(id);
        }
        
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist && systemAdmin.Login != entity.Login)
        {
            throw new UserExistException(entity.Login);
        }
        
        _mapper.Map(entity, systemAdmin);
        _mapper.Map(entity.Address, address);
        
        await _addressRepository.Update(address);
        await _repository.Update(systemAdmin);
        await _repository.SaveChanges();
        
        return new ServiceResponse<SystemAdminDto>
        {
            Data = _mapper.Map<SystemAdminDto>(systemAdmin),
            Message = "",
            Success = true
        };
    }

    public override async void Validate(SystemAdminDto entity)
    {
        var isLogin = ValidatorUtil.ValidateText(entity.Login, 3, 50, "[a-zA-Z0-9]*");
        
        if (!isLogin) throw new ValidationException<SystemAdminDto>("Login is invalid");
    }

    public async override Task<bool> Authorize(SystemAdminDto entity)
    {
        return true;
    }
}