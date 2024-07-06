using Application.Dto.School;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.Entities_v2.Types;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class SchoolService: BaseService<SchoolDto, School>, ISchoolService
{
    private readonly IAddressRepository _addressRepository;

    public SchoolService(ISchoolRepository repository, IAddressRepository addressRepository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
        _addressRepository = addressRepository;
    }
    
    public async Task<ServiceResponse<SchoolWithAdminsDto>> GetSchoolWithAdmins(int id)
    {
        var school = await ((ISchoolRepository) _repository).GetSchoolWithAdmins(id);
        return new ServiceResponse<SchoolWithAdminsDto>
        {
            Data = _mapper.Map<SchoolWithAdminsDto>(school)
        };
    }

    public override async Task<ServiceResponse<SchoolDto>> Add(SchoolDto entity)
    {
        Console.WriteLine("Create address for school");
        var address = _mapper.Map<Address>(entity.Address);
        await _addressRepository.Add(address);
        
        Console.WriteLine("Create school");
        var school = _mapper.Map<School>(entity);
        school.AddressId = address.Id;
        school.Address = address;
        await _repository.Add(school);

        Console.WriteLine("Saving changes");
        await _repository.SaveChanges();
        
        Console.WriteLine("Return school");
        return new ServiceResponse<SchoolDto>
        {
            Data = _mapper.Map<SchoolDto>(school)
        };
    }

    public async Task<ServiceResponse<SchoolDto>> Update(SchoolDto entity)
    {
        var address = await _addressRepository.GetById(entity.Address.Id);
        if (address == null)
        {
            throw new ObjectNotFoundException<Address>(entity.Address.Id);
        }
        
        var school = await _repository.GetById(entity.Id);
        if (school == null)
        {
            throw new ObjectNotFoundException<School>(entity.Id);
        }
        
        _mapper.Map(entity, school);
        _mapper.Map(entity.Address, address);
        
        await _addressRepository.Update(address);
        await _repository.Update(school);
        await _repository.SaveChanges();
        
        return new ServiceResponse<SchoolDto>
        {
            Data = _mapper.Map<SchoolDto>(school)
        };
    }

    public override async void Validate(SchoolDto entity)
    {
        var isExist = await _repository.Exists(entity.Id);
        var isName = ValidatorUtil.ValidateText(entity.Name, 3, 50, RegexExpression.PolishLettersSpacesNumbers);
        // if (isExist) throw new ValidationException<SchoolDto>("School with this id already exists");
        // if (!isName) throw new ValidationException<SchoolDto>("School name is invalid");
    }

    public async override Task<bool> Authorize(SchoolDto entity)
    {
        return true;
    }
}