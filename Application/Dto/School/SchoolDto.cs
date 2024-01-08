using Domain.Entities_v2.Types;

namespace Application.Dto.School;

public class SchoolDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string Website { get; set; } = null!;
    
    public int? AdminCount { get; set; }
    
    public AddressDto Address { get; set; } = null!;
}