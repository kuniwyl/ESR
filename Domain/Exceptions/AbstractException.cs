using Domain.Models;

namespace Domain.Exceptions;

public class AbstractException : Exception
{
    private readonly string _message;
    private readonly string? _exception;
    private readonly int _statusCode;
    
    protected AbstractException(string message, string exception, int statusCode)
    {
        _message = message;
        _exception = exception;
        _statusCode = statusCode;
    }
    
    public ServiceResponse<bool> GetServiceResponse()
    {
        return new ServiceResponse<bool>
        {
            StatusCode = _statusCode,
            Message = _message,
            Exception = _exception ?? "",
            Success = false
        };
    }
}