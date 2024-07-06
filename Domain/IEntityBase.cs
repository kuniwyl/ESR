using Domain.Entities_v2.Types;

namespace Domain;

public interface IEntityBase
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; } 
}