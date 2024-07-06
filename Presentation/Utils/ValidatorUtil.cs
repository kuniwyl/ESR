using System.Text.RegularExpressions;

namespace Presentation.Utils;

public class ValidatorUtil
{
    public static bool ValidateText(string text, int minLength, int maxLength, string regex)
    {
        if (text.Length < minLength || text.Length > maxLength)
        {
            return false;
        }

        return Regex.IsMatch(text, regex);
    }
    
    public static bool ValidateEmail(string email)
    {
        return ValidateText(email, 5, 50, @"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
    }
    
    public static bool ValidatePassword(string password)
    {
        return ValidateText(password, 8, 50, @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$");
    }
    
    public static bool ValidateDateBetween(DateTime date, DateTime min, DateTime max)
    {
        return date >= min && date <= max;
    }
    
    public static bool ValidateIsToken(string token)
    {
        return ValidateText(token, 10, 100, @"^[a-zA-Z0-9.]*$");
    }
    
    public static bool ValidateIsDays(int number)
    {
        return number >= 1 && number <= 5;
    }
    
    public static bool ValidateIsIntegerBetween(int number, int min, int max)
    {
        return number >= min && number <= max;
    }
}