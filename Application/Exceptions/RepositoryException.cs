using Domain;
using Domain.Exceptions;

namespace Application.Exceptions;

public class RepositoryException<T> : AbstractException where T : class, IEntityBase
{
    public RepositoryException(string message, Exception? exception) : base(message, "RepositoryException", 500)
    {
    }
}