namespace Domain.Models;

public class ServiceResponseWithoutData
{
    public bool Success { get; set; } = true;
    public int StatusCode { get; set; } = 200;
    public string Message { get; set; } = string.Empty;
    public string? Exception { get; set; } = string.Empty;
}