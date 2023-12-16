using Application.IServices;

namespace Application.Exceptions;

public class AbstractException<T>: Exception
{
    public ServiceResponse<T> Response { get; set; } = new();
    
    public AbstractException()
    {
        Response.Success = false;
        Response.Message = "An error occurred";
        Response.Exception = GetType().Name;
        Response.DataTypeName = typeof(T).Name;
    }
}