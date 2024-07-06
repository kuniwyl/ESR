namespace Domain.Exceptions;

public class CreateFailedException<T>: AbstractException where T : class, IEntityBase 
{
    public CreateFailedException(T entity, Exception e) : base($"Failed to create {entity.GetType().Name}", "CreateFailedException", 422) { }
}