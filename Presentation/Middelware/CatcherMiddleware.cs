using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using Application.IServices;
using Domain.Exceptions;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Middelware;

public class CatcherMiddleware
{
    private readonly RequestDelegate _next;
    private readonly JsonSerializerOptions opt = new JsonSerializerOptions()
    {
        WriteIndented = true,
    };
    
    public CatcherMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    
    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (AbstractException ex)
        {
            var serviceResponse = ex.GetServiceResponse();
            var response = context.Response;
            response.StatusCode = serviceResponse.StatusCode;
            response.ContentType = "application/json";
            Console.WriteLine(ex.GetType().Name + " " + ex.Message);
            await response.WriteAsync(JsonSerializer.Serialize(serviceResponse, opt));
        }
        catch (Exception ex)
        {
            var response = context.Response;
            response.StatusCode = (int) HttpStatusCode.InternalServerError;
            response.ContentType = "application/json";
            Console.WriteLine(ex.GetType().Name + " " + ex.Message + " " + ex.StackTrace);
            Console.WriteLine(ex.InnerException);
            await response.WriteAsync(JsonSerializer.Serialize(new ServiceResponse<object>
            {
                Success = false,
                Message = ex.Message,
                Data = ex.GetType().Name
            }, opt));
        }
    }
}