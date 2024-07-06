namespace Presentation.Utils;

public class RegexExpression
{
    public const string PolishLettersNumbers = @"^[A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]*$";
    public const string PolishLetters = @"^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$";
    public const string PolishLettersSpaces = @"^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]*$";
    public const string PolishLettersSpacesNumbers = @"^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 ]*$";
    public const string Numbers = @"^[0-9]*$";
    public const string NumbersNullable = @"^\d*$";
    public const string Email = @"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}";
    public const string Website = @"^((http|https):\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
    public const string ZipCode = @"^[0-9]{2}-[0-9]{3}$";
    public const string Semester = @"^[0-9]{4}\/[0-9]{4}[ZL]$";
    public const string ClassNameId = @"^[A-Z]{1}[1-9]{1}$";
    public const string Password = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$";
}

