using Domain;
using Domain.Exceptions;

namespace Application.Exceptions;

public class MapperException<T> : AbstractException where T : class, IEntityBase 
{
    public MapperException(string message, Exception? exception) : base(message, "MapperException", 500)
    {
    }
}