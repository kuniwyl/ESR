using System.Security.Claims;

namespace Presentation.Utils;

public static class HttpContextUtil
{
    public static string GetUserId(this IHttpContextAccessor contextAccessor)
    {
        return contextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "";
    }
    
    public static int GetSchoolId(this IHttpContextAccessor contextAccessor)
    {
        var schoolId = contextAccessor.HttpContext?.User.FindFirstValue("SchoolId");
        return schoolId == null ? 0 : int.Parse(schoolId);
    }
    
    public static bool HasAccess(this IHttpContextAccessor contextAccessor, int schoolId)
    {
        var userSchoolId = contextAccessor.GetSchoolId();
        if (IsSystemAdmin(contextAccessor)) return true;
        return userSchoolId == schoolId;
    }
    
    public static bool IsSystemAdmin(this IHttpContextAccessor contextAccessor)
    {
        var role = contextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.Role);
        return role == "SystemAdmin";
    }
    
    public static bool IsSchoolAdmin(this IHttpContextAccessor contextAccessor)
    {
        var role = contextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.Role);
        return role == "SchoolAdmin";
    }
}