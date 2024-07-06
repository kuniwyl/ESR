using Application.IServices;
using Domain.Exceptions;

namespace Application.Exceptions;

public class ValidationException<T>: AbstractException
{
    public ValidationException(string message) : base(message, "ValidationException", 400)
    {
    }
}