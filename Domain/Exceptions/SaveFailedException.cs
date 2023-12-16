namespace Domain.Exceptions;

public class SaveFailedException<T> : Exception where T : class, IEntityBase
{
    public SaveFailedException(T entity) : base($"Failed to save object of type {typeof(T)} with id {entity.Id} to database: entity: {entity}")
    {
    }
    
}