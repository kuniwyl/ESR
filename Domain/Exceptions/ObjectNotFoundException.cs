namespace Domain.Exceptions;

public class ObjectNotFoundException<T> : Exception 
{
    public ObjectNotFoundException(int id) : base($"Object of type {typeof(T)} with id {id} was not found.")
    {
    }
}