namespace Domain.Exceptions;

public class DeleteFailedException<T>: Exception where T : class, IEntityBase
{
    public DeleteFailedException(T entity) : base($"Failed to delete object of type {typeof(T)} with id {entity.Id}: entity: {entity}")
    {
    }
}