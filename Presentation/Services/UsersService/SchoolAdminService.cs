using Application.Dto.Users;
using Application.IServices;
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

namespace Presentation.Services.UsersService;

public class SchoolAdminService: BaseService<SchoolAdminDto, SchoolAdmin>, ISchoolAdminService
{
    private readonly IUserRepository _userRepository;
    private readonly IAddressRepository _addressRepository;
    
    public SchoolAdminService(ISchoolAdminRepository repository, IAddressRepository addressRepository, IMapper mapper, IExistRepository existRepository, IUserRepository userRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
        _addressRepository = addressRepository;
    }
    
    
    public async Task<ServiceResponse<SchoolAdminDto>> Add(CreateUserDto entity)
    {
        Console.WriteLine("Add SchoolAdmin");
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            throw new UserExistException(entity.Login);
        }
        
        var address = _mapper.Map<Address>(entity.Address);
        await _addressRepository.Add(address);
        
        var schoolAdmin = _mapper.Map<SchoolAdmin>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        
        schoolAdmin.AddressId = address.Id;
        schoolAdmin.Address = address;
        
        schoolAdmin.PasswordHash = password;
        schoolAdmin.Role = UserRole.SchoolAdmin;
        
        var result = await _repository.Add(schoolAdmin);
        await _repository.SaveChanges();
        return new ServiceResponse<SchoolAdminDto>
        {
            Data = _mapper.Map<SchoolAdminDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<SchoolAdminDto>> Update(int id, SchoolAdminDto entity)
    {
        var schoolAdmin = await _repository.GetById(id);
        if (schoolAdmin == null)
        {
            throw new ObjectNotFoundException<SchoolAdmin>(id);
        }
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist && schoolAdmin.Login != entity.Login)
        {
            throw new UserExistException(entity.Login);
        }
        
        schoolAdmin.Login = entity.Login;
        schoolAdmin.FirstName = entity.FirstName;
        schoolAdmin.LastName = entity.LastName;
        
        var result = await _repository.Update(schoolAdmin);
        await _repository.SaveChanges();
        return new ServiceResponse<SchoolAdminDto>
        {
            Data = _mapper.Map<SchoolAdminDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<SchoolAdminDto[]>> GetFromSchools(int schoolId)
    {
        var result = await ((ISchoolAdminRepository) _repository).GetFromSchools(schoolId);
        return new ServiceResponse<SchoolAdminDto[]>
        {
            Data = _mapper.Map<SchoolAdminDto[]>(result),
            Message = "",
            Success = true
        };
    }


    public override async void Validate(SchoolAdminDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(SchoolAdminDto entity)
    {
        return true;
    }
}