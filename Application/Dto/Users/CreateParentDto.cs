using Domain.Entities_v2.Types;

namespace Application.Dto.Users;

public class CreateParentDto: ParentDto
{
    public string Password { get; set; } = "";
}