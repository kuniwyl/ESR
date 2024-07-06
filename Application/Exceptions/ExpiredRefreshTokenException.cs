using Domain;
using Domain.Exceptions;

namespace Application.Exceptions;

public class ExpiredRefreshTokenException<T>: AbstractException where T : class
{
    public ExpiredRefreshTokenException() : base("Refresh token expired", "ExpiredRefreshTokenException", 401)
    {
    }
}