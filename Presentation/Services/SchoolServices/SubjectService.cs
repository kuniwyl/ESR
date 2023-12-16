using Application.Dto.School;
using Application.IServices.School;
using AutoMapper;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Services.SchoolServices;

public class SubjectService: BaseService<SubjectDto, Subject>, ISubjectService
{
    public SubjectService(ISubjectRepository repository, IMapper mapper) : base(repository, mapper)
    {
    }
}