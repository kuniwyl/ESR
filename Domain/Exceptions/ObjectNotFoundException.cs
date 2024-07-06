namespace Domain.Exceptions;

public class ObjectNotFoundException<T> : AbstractException where T : class, IEntityBase
{
    public ObjectNotFoundException(int id) : base($"Object {typeof(T).Name} with id {id} not found", "ObjectNotFoundException", 404) { }
}