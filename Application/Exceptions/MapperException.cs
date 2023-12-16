namespace Application.Exceptions;

public class MapperException<T> : AbstractException<T> 
{
    public MapperException(string model) : base() {
        var message = $"MapperException: cannot map from {typeof(T)} to {model}";
        base.Response.Message = message;
    }
}