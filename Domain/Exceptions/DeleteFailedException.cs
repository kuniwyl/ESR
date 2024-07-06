namespace Domain.Exceptions;

public class DeleteFailedException<T>: AbstractException where T : class, IEntityBase
{
    public DeleteFailedException(T entity, Exception e) : base($"Failed to delete {entity.GetType().Name}", "DeleteFailedException", 404) { }
}