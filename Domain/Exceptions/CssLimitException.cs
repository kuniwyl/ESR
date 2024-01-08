namespace Domain.Exceptions;

public class CssLimitException: AbstractException
{
    public CssLimitException(): base("You have reached the limit of class subject semester instances", "CssLimitException", 404)
    {
    }
}