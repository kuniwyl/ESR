namespace Application.IServices;

public class ServiceResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public string Exception { get; set; } = string.Empty;
    public string DataTypeName { get; set; } = string.Empty;
    public T? Data { get; set; }
}