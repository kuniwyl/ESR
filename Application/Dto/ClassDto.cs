namespace Application.Dto;

public class ClassDto
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    
    public UserShortDto TeacherShort { get; set; } = new();
}