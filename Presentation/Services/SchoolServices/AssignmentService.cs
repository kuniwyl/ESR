using Application.Dto.School;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Services.SchoolServices;

public class AssignmentService: BaseService<AssignmentDto, Assignment>, IAssignmentService
{
    public AssignmentService(IAssignmentRepository repository, IMapper mapper) : base(repository, mapper)
    {
    }
}