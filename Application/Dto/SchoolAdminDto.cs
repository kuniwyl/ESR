namespace Application.Dto;

public class SchoolAdminDto
{
    public int Id { get; set; }
    public string Login { get; set; } = String.Empty;
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public int SchoolId { get; set; }
}