using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class AddressDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Street { get; set; } = null!;
    public string House { get; set; } = null!;
    public string Apartment { get; set; } = null!;
    public string City { get; set; } = null!;
    public string ZipCode { get; set; } = null!;
}