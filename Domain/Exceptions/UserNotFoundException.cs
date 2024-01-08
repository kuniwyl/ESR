using Domain.Entities_v2.Users;

namespace Domain.Exceptions;

public class UserNotFoundException: AbstractException
{
    public UserNotFoundException(string login) : base($"User with login {login} not found", "UserNotFoundException", 404)
    {
    }
}