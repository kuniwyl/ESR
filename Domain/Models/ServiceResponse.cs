namespace Domain.Models;

public class ServiceResponse<T> : ServiceResponseWithoutData
{
    public T? Data { get; set; }
}