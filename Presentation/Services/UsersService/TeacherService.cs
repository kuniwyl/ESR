using System.Security.Authentication;
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

public class TeacherService: BaseService<TeacherDto, Teacher>, ITeacherService
{
    private readonly IUserRepository _userRepository;
    private readonly IAddressRepository _addressRepository;

    public TeacherService(ITeacherRepository repository, IAddressRepository addressRepository, IMapper mapper, IExistRepository existRepository, IUserRepository userRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
        _addressRepository = addressRepository;
    }

    public async Task<ServiceResponse<TeacherDto>> Add(CreateUserDto entity)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            throw new UserExistException(entity.Login);
        }
        var teacher = _mapper.Map<Teacher>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        
        teacher.PasswordHash = password;
        teacher.SchoolId = schoolId;
        teacher.Role = UserRole.Teacher;
        var result = await _repository.Add(teacher);
        await _repository.SaveChanges();
        return new ServiceResponse<TeacherDto>
        {
            Data = _mapper.Map<TeacherDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<TeacherDto[]>> GetTeachersFromSchool(int schoolId)
    {
        var teachers = await ((ITeacherRepository) _repository).GetTeachersFromSchool(schoolId);
        var mapped = _mapper.Map<TeacherDto[]>(teachers);
        return new ServiceResponse<TeacherDto[]>
        {
            Data = mapped,
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<TeacherDto>> Update(int id, TeacherDto entity)
    {
        if (id != entity.Id)
        {
            throw new ValidationException<TeacherDto>("Id is invalid");
        }
        if (!await Authorize(entity))
        {
            throw new NotAuthorizedException<Teacher>("You are not authorized to do this action");
        }
        var teacher = await _repository.GetById(id);
        var address = await _addressRepository.GetById(entity.Address.Id);
        
        if (teacher == null)
        {
            throw new ObjectNotFoundException<Teacher>(id);
        }
        if (address == null)
        {
            throw new ObjectNotFoundException<Address>(entity.Address.Id);
        }
        
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist && teacher.Login != entity.Login)
        {
            throw new UserExistException(entity.Login);
        }
        
        _mapper.Map(entity, teacher);
        _mapper.Map(entity.Address, address);
        
        var result = await _repository.Update(teacher);
        await _repository.SaveChanges();
        return new ServiceResponse<TeacherDto>
        {
            Data = _mapper.Map<TeacherDto>(result),
            Message = "",
            Success = true
        };
    }

    public override async void Validate(TeacherDto entity)
    {
        throw new NotImplementedException();
    }

    public async override Task<bool> Authorize(TeacherDto entity)
    {
        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }

        var schoolId = _contextAccessor.GetSchoolId();
        if (entity.SchoolId != schoolId) throw new AuthenticationException("You are not authorized to perform this action");

        return true;
    }
}