namespace Domain.Exceptions;

public class UserNotFound: Exception
{
    public UserNotFound(string login) : base($"User with login {login} was not found.")
    {
    }
}