using Application.Dto.School;
using Application.Exceptions;
using Application.IServices;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories;
using Domain.IRepositories.SchoolRepositories;
using Domain.Models;
using Presentation.Utils;

namespace Presentation.Services.SchoolServices;

public class AssignmentService: BaseService<AssignmentDto, Assignment>, IAssignmentService
{
    public AssignmentService(IAssignmentRepository repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor) : base(repository, mapper, existRepository, contextAccessor)
    {
    }

    public override async void Validate(AssignmentDto entity)
    {
        // var isExist = await _repository.Exists(entity.Id);
        // var isName = ValidatorUtil.ValidateText(entity.Name, 3, 50, RegexExpression.PolishLettersRegex);
        // var isDescription = ValidatorUtil.ValidateText(entity.Description, 3, 150, RegexExpression.PolishLettersWithNumbersRegex);
        //
        // if (isExist) throw new ValidationException<AssignmentDto>("Assignment already exist");
        // if (!isName) throw new ValidationException<AssignmentDto>("Assignment name is invalid");
        // if (!isDescription) throw new ValidationException<AssignmentDto>("Assignment description is invalid");
        
    }

    public async override Task<bool> Authorize(AssignmentDto entity)
    {
        return true;
    }

    public async Task<ServiceResponse<AssignmentDto[]>> GetByCssId(int cssId)
    {
        var response = new ServiceResponse<AssignmentDto[]>();
        var assignments = await ((IAssignmentRepository) _repository).GetByCssId(cssId);
        var assignmentsDto = _mapper.Map<AssignmentDto[]>(assignments);
        return new ServiceResponse<AssignmentDto[]>()
        {
            Data = assignmentsDto
        };
    }
}