using Domain.Entities;

namespace Application.Dto;

public class ParentDto
{
    public int Id { get; set; }
    public string Login { get; set; } = "";
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public UserRole Role { get; set; }
    public int SchoolId { get; set; }
    public UserShortDto Student { get; set; } = new();
}