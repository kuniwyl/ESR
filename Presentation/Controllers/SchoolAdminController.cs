using System.Security.Claims;
using Application.Dto;
using Application.IServices;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Services;
using Presentation.Utils;

namespace Presentation.Controllers;

[ApiController]
[Route("/api/school")]
[Authorize(Roles = "SystemAdmin, SchoolAdmin")]
public class SchoolAdminController(ISchoolService schoolService, IHttpContextAccessor contextAccessor)
    : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<SchoolDataDto>> GetSchoolData()
    {
        var schoolId = contextAccessor.GetSchoolId();
        var schoolData = await schoolService.GetSchool(schoolId);
        if (schoolData == null)
        {
            return BadRequest("School not found");
        }
        return Ok(schoolData);
    }
}