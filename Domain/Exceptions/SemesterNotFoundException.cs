namespace Domain.Exceptions;

public class SemesterNotFoundException: AbstractException
{
    public SemesterNotFoundException(int id) : base($"Semester with schoolId {id} not found", "SemesterNotFoundException", 404) { }
}