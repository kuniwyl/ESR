namespace Application.Dto;

public class UserDto
{
    public int Id { get; set; }
    public string Login { get; set; } = "";
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public string Role { get; set; }
    public int? SchoolId { get; set; }
}