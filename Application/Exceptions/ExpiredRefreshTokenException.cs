namespace Application.Exceptions;

public class ExpiredRefreshTokenException<T>: AbstractException<T>
{
    public ExpiredRefreshTokenException(string message) 
    {
        Response.Message = message;
        Response.Exception = GetType().Name;
    }
}