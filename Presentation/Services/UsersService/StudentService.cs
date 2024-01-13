using System.ComponentModel.DataAnnotations;
using Application.Dto.School;
using Application.Dto.Users;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
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

public class StudentService: BaseService<StudentDto, Student>, IStudentService
{
    private readonly IUserRepository _userRepository;
    private readonly IParentRepository _parentRepository;
    private readonly IAddressRepository _addressRepository;
    private readonly ISemesterService _semesterService;
    
    public StudentService(IStudentRepository repository, ISemesterService semesterService, IMapper mapper, IExistRepository existRepository, IUserRepository userRepository, IHttpContextAccessor contextAccessor, IParentRepository parentRepository, IAddressRepository addressRepository) : base(repository, mapper, existRepository, contextAccessor)
    {
        _userRepository = userRepository;
        _parentRepository = parentRepository;
        _addressRepository = addressRepository;
        _semesterService = semesterService;
    }

    public async Task<ServiceResponse<StudentDto>> Add(CreateUserDto entity)
    {
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist)
        {
            throw new UserExistException(entity.Login);
        }
        var student = _mapper.Map<Student>(entity);
        var password = BCrypt.Net.BCrypt.HashPassword(entity.Password);
        student.PasswordHash = password;
        student.Role = UserRole.Student;
        var result = await _repository.Add(student);
        await _repository.SaveChanges();
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
            throw new UserExistException(dto.Login);
        }
        
        var parent = _mapper.Map<Parent>(dto.Parent);
        var student = _mapper.Map<Student>(dto);
        
        var address = _mapper.Map<Address>(dto.Address);
        var parentAddress = _mapper.Map<Address>(dto.Parent.Address);
        
        if (!address.Equals(parentAddress))
        {
            var parentAddressO = await _addressRepository.Add(parentAddress);
            var userAddressO = await _addressRepository.Add(address);
            student.Address = userAddressO;
            parent.Address = parentAddressO;
        }
        else
        {
            var userAddressO = await _addressRepository.Add(address);
            student.Address = userAddressO;
            parent.Address = userAddressO;
        }
        
        var parentPassword = BCrypt.Net.BCrypt.HashPassword(dto.Parent.Password);
        parent.PasswordHash = parentPassword;
        parent.Role = UserRole.Parent;
        var parentO = await _parentRepository.Add(parent);
        
        var password = BCrypt.Net.BCrypt.HashPassword(dto.Password);
        student.PasswordHash = password;
        student.Role = UserRole.Student;
        student.Parent = parentO;
        
        var result = await _repository.Add(student);
        await _repository.SaveChanges();
        return new ServiceResponse<StudentDto>
        {
            Data = _mapper.Map<StudentDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<StudentDto[]>> GetStudentsFromClass(int classId)
    {
        var students = await ((IStudentRepository) _repository).GetStudentsFromClass(classId);
        var mapped = _mapper.Map<StudentDto[]>(students);
        return new ServiceResponse<StudentDto[]>
        {
            Data = mapped,
            Message = "",
            Success = true
        };
    }

    public new async Task<ServiceResponse<StudentDto>> Update(int id, StudentDto entity)
    {
        var student = await _repository.GetById(id);
        if (student == null)
        {
            throw new ObjectNotFoundException<Student>(id);
        }
        var isLoginExist = await _userRepository.IsLoginExist(entity.Login);
        if (isLoginExist && student.Login != entity.Login)
        {
            throw new UserExistException(entity.Login);
        }
        
        var address = await _addressRepository.GetById(entity.Address.Id);
        if (address == null)
        {
            throw new ObjectNotFoundException<Address>(entity.Address.Id);
        }
        
        var parent = await _parentRepository.GetById(entity.Parent.Id);
        if (parent == null)
        {
            throw new ObjectNotFoundException<Parent>(entity.Parent.Id);
        }
        
        var parentAddress = await _addressRepository.GetById(entity.Parent.Address.Id);
        if (parentAddress == null)
        {
            throw new ObjectNotFoundException<Address>(entity.Parent.Address.Id);
        }
        
        _mapper.Map(entity.Parent, parent);
        _mapper.Map(entity, student);
        
        var resultParent = await _parentRepository.Update(parent);
        var result = await _repository.Update(student);
        await _repository.SaveChanges();
        return new ServiceResponse<StudentDto>
        {
            Data = _mapper.Map<StudentDto>(result),
            Message = "",
            Success = true
        };
    }

    public async Task<ServiceResponse<UserSubjects>> GetSubjects()
    {
        var response = new ServiceResponse<UserSubjects>();
        var userId = _contextAccessor.GetUserId();
        var user = await _userRepository.GetById(int.Parse(userId));
        if (user == null)
        {
            throw new ObjectNotFoundException<User>(int.Parse(userId));
        }
        var studnetId = user.Role == UserRole.Student ? int.Parse(userId) : ((Parent) user).StudentId;
        var studnet = await _repository.GetById(studnetId);
        if (studnet == null)
        {
            throw new ObjectNotFoundException<Student>(studnetId);
        }
        var semester = await _semesterService.GetCurrentSemester(studnet.SchoolId);
        var css = await ((IStudentRepository) _repository).GetClassSubjectSemesters(studnet.ClassId, semester.Data.Id);
        var finalGrades = await ((IStudentRepository) _repository).GetFinalGrades(studnet.Id, semester.Data.Id);
        var grades = await ((IStudentRepository) _repository).GetGrades(studnet.Id, semester.Data.Id);
        var presence = await ((IStudentRepository) _repository).GetPresence(studnet.Id, semester.Data.Id);
        
        response.Data = new UserSubjects
        {
            ClassSubjectSemesters = _mapper.Map<ClassSubjectSemesterDto[]>(css),
            FinalGrades = _mapper.Map<FinalGradeDto[]>(finalGrades),
            Grades = _mapper.Map<GradeDto[]>(grades),
            Presences = _mapper.Map<PresenceDto[]>(presence)
        };
        
        return response;
    }

    public override async void Validate(StudentDto entity)
    {
        var isExist = await _repository.Exists(entity.Id);
        var isLogin = ValidatorUtil.ValidateText(entity.Login, 3, 50, "^[a-zA-Z0-9]+$");
        var isFirstName = ValidatorUtil.ValidateText(entity.FirstName, 3, 50, RegexExpression.PolishLettersRegex);
        var isLastName = ValidatorUtil.ValidateText(entity.LastName, 3, 50, RegexExpression.PolishLettersRegex);
        var isSchoolId = await _existRepository.IsSchoolExist(entity.SchoolId);
        var isClassId = await _existRepository. IsClassExist(entity.ClassId);
        
        // if (!isExist) throw new ValidationException<StudentDto>("Invalid id");
        // if (!isLogin) throw new ValidationException<StudentDto>("Invalid login");
        // if (!isFirstName) throw new ValidationException<StudentDto>("Invalid first name");
        // if (!isLastName) throw new ValidationException<StudentDto>("Invalid last name");
        // if (!isSchoolId) throw new ValidationException<StudentDto>("Invalid school id");
        // if (!isClassId) throw new ValidationException<StudentDto>("Invalid class id");
    }

    public override async Task<bool> Authorize(StudentDto entity)
    {
        var schoolId = _contextAccessor.GetSchoolId();
        if (entity.Id == 0)
        {
            return true;
        }
        var student = await _repository.GetById(entity.SchoolId);
        return student != null && schoolId == student.SchoolId;
    }
}