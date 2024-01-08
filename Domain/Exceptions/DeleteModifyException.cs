namespace Domain.Exceptions;

public class DeleteModifyException: AbstractException
{
    public DeleteModifyException(int elemId) : base($"Cannot modify element with id {elemId} - object is deleted", "DeleteModifyException", 403)
    {
    }
}