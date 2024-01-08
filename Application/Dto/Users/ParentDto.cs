using Application.Dto.School;
using Domain.Entities_v2.Types;

namespace Application.Dto.Users;

public class ParentDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Login { get; set; } = "";
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public string Phone { get; set; } = "";
    public DateTime BirthDate { get; set; }
    public AddressDto Address { get; set; } = null!;
    public string Role { get; set; } = "";
    public int SchoolId { get; set; }
    public int StudentId { get; set; } 
}