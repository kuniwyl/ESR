namespace Domain.Exceptions;

public class CreateFailedException<T>: Exception where T : class, IEntityBase 
{
    public CreateFailedException(T entity, Exception e) : base($"Failed to create object of type {typeof(T)} with id {entity.Id}: entity: {entity}, exception: {e}")
    {
    }
}