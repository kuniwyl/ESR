using Application.Dto.School;
using Domain.Entities_v2.Types;

namespace Application.Dto.Users;

public class CreateUserDto: IBaseDto
{
    public int Id { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public Status Status { get; set; }
    
    public string Pesel { get; set; } = "";
    public string Login { get; set; } = "";
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public string Role { get; set; } = "";
    public string Phone { get; set; } = "";
    public DateTime BirthDate { get; set; }
    public string Password { get; set; } = "";
    public AddressDto Address { get; set; } = null!;
    public int SchoolId { get; set; }
}