using Application.Dto.Users;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.Users;
using AutoMapper;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.IRepositories.Users;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.UsersService;

public class ParentService: BaseService<ParentDto, Parent>, IParentService
{
    private readonly IUserRepository _userRepository;
    
    public ParentService(IParentRepository repository, IMapper mapper, IExistRepository existRepository, IUserRepository userRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
    }
    
    public async Task<ServiceResponse<ParentDto>> Add(CreateParentDto entity)
    {
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            throw new UserExistException(entity.Login);
        }
        var parent = _mapper.Map<Parent>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        parent.PasswordHash = password;
        parent.Role = UserRole.Parent;
        var result = await _repository.Add(parent);
        await _repository.SaveChanges();
        return new ServiceResponse<ParentDto>
        {
            Data = _mapper.Map<ParentDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<ParentDto>> Update(int id, ParentDto entity)
    {
        var parent = await _repository.GetById(id);
        if (parent == null)
        {
            throw new ObjectNotFoundException<Parent>(id);
        }
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist && parent.Login != entity.Login)
        {
            throw new UserExistException(entity.Login);
        }
        parent.FirstName = entity.FirstName;
        parent.LastName = entity.LastName;
        parent.Login = entity.Login;
        parent.StudentId = entity.StudentId;
        parent.Updated = DateTime.Now;
        
        var result = await _repository.Update(parent);
        await _repository.SaveChanges();
        return new ServiceResponse<ParentDto>
        {
            Data = _mapper.Map<ParentDto>(result),
            Message = "",
            Success = true
        };  
    }

    public async Task<ServiceResponse<ParentDto[]>> GetParentsFromClass(int classId)
    {
        var parents = await ((IParentRepository) _repository).GetParentsFromClass(classId);
        return new ServiceResponse<ParentDto[]>
        {
            Data = _mapper.Map<ParentDto[]>(parents),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<ParentDto>> Add(CreateUserDto entity)
    {
        throw new NotImplementedException();
    }

    public override async void Validate(ParentDto entity)
    {
        var isExist = await _repository.Exists(entity.Id);
        var isFirstName = ValidatorUtil.ValidateText(entity.FirstName, 3, 50, RegexExpression.PolishLettersRegex);
        var isLastName = ValidatorUtil.ValidateText(entity.LastName, 3, 50, RegexExpression.PolishLettersRegex);
        var isLogin = ValidatorUtil.ValidateText(entity.Login, 3, 50, RegexExpression.PolishLettersWithNumbersRegex);
        var isStudentId = await _existRepository.IsStudentExist(entity.StudentId);
        var isSchoolId = await _existRepository.IsSchoolExist(entity.SchoolId);
        
        if (isExist) throw new ValidationException<ParentDto>("Parent with this id already exists");
        if (!isFirstName) throw new ValidationException<ParentDto>("Parent first name is invalid");
        if (!isLastName) throw new ValidationException<ParentDto>("Parent last name is invalid");
        if (!isLogin) throw new ValidationException<ParentDto>("Parent login is invalid");
        if (!isStudentId) throw new ValidationException<ParentDto>("Parent student id is invalid");
        if (!isSchoolId) throw new ValidationException<ParentDto>("Parent school id is invalid");
    }

    public async override Task<bool> Authorize(ParentDto entity)
    {
        return true;
    }
}