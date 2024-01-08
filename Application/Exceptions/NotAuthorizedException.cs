using Domain;
using Domain.Exceptions;

namespace Application.Exceptions;

public class NotAuthorizedException<T>: AbstractException where T : class
{
    public NotAuthorizedException(string message) : base(message, "NotAuthorizedException", 401)
    {
    }
}