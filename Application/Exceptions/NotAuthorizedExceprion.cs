namespace Application.Exceptions;

public class NotAuthorizedExceprion<T>: AbstractException<T>
{
    public NotAuthorizedExceprion(string message) 
    {
        Response.Message = message;
        Response.Exception = GetType().Name;
    }
}