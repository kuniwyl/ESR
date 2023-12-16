namespace Application.Exceptions;

public class RepositoryException<T> : AbstractException<T>
{
    public RepositoryException(Exception exception) : base()
    {
        base.Response.Message = exception.Message;
    }
}