namespace Application.Dto.Users;

public class CreateStudentDto: CreateUserDto
{
    public int ClassId { get; set; }
}