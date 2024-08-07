using Application.DB.DataContext;
using Domain.Entities_v2.School;
using Domain.IRepositories.SchoolRepositories;

namespace Presentation.Repositories.SchoolRepositories;

public class AddressRepository: RepositoryBase<Address>, IAddressRepository
{
    public AddressRepository(SchoolContext context) : base(context)
    {
    }
}