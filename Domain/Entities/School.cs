namespace Domain.Entities;

public class School : IEntityBase
{
    public new int Id { get; set; }
    public string Name { get; set; } = "";
    public string Address { get; set; } = "";
    public string City { get; set; } = "";
    public string State { get; set; } = "";
    public string ZipCode { get; set; } = "";
    public string PhoneNumber { get; set; } = "";
    public string Email { get; set; } = "";
    public string Website { get; set; } = "";
    public string LogoUrl { get; set; } = "";
    
    public List<Student> Students { get; set; } = new();
    public List<Teacher> Teachers { get; set; } = new();
    public List<Parent> Parents { get; set; } = new();
    public List<SchoolAdmin> SchoolAdmins { get; set; } = new();
    
    public List<Subject> Subjects { get; set; } = new();
    public List<Class> Classes { get; set; } = new();
}