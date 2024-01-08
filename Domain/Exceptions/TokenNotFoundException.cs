namespace Domain.Exceptions;

public class TokenNotFoundException: AbstractException
{
    public TokenNotFoundException(string token) : base($"Token {token} not found", "TokenNotFoundException", 404)
    {
    }
}