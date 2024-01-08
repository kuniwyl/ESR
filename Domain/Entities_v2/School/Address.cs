using Domain.Entities_v2.Types;

namespace Domain.Entities_v2.School;

public class Address: IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Street { get; set; } = null!;
    public string House { get; set; } = null!;
    public string? Apartment { get; set; } 
    public string City { get; set; } = null!;
    public string ZipCode { get; set; } = null!;
}