using Domain.Entities;

namespace Application.Dto;

public class SubjectDto
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";

    public UserShortDto Teacher { get; set; } = new();
}