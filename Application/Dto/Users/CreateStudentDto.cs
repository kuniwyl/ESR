namespace Application.Dto.Users;

public class CreateStudentDto: StudentDto
{
    public string Password { get; set; } = "";
    public new CreateParentDto Parent { get; set; } = null!;
}