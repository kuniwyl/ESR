namespace Domain.Exceptions;

public class UserExistException: AbstractException
{
    public UserExistException(string login) : base($"User with login {login} already exist", "UserExistException", 409)
    {
    }
}