using Application.Dto.Users;

namespace Application.Dto.School;

public class SchoolWithAdminsDto: SchoolDto
{
    public List<SchoolAdminDto> Admins { get; set; } = new();
}