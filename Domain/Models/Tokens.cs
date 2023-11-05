namespace Domain.Models;

public class Tokens
{
    public string Token { get; set; } = "";
    public RefreshToken RefreshToken { get; set; } = null!;
}