namespace Domain.Exceptions;

public class SaveFailedException<T> : AbstractException where T : class, IEntityBase
{
    public SaveFailedException(T entity) : base($"Failed to save {entity.GetType().Name}", "SaveFailedException", 422) { }
    
}