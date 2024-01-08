using Application.IServices;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Presentation.Utils;

namespace Presentation.Controllers;

public abstract class BaseController<TDto, TModel> : ControllerBase
    where TDto : class
    where TModel : class, IEntityBase
{
    protected readonly IHttpContextAccessor _contextAccessor;
    protected readonly IBaseService<TDto, TModel> _service;
    
    public BaseController(IHttpContextAccessor contextAccessor, IBaseService<TDto, TModel> service)
    {
        this._contextAccessor = contextAccessor;
        this._service = service;
    }
    
    // [HttpGet]
    [NonAction]
    public virtual async Task<IActionResult> GetAll()
    {
        var result = await _service.GetAll();
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    // [HttpGet("page/{page}/size/{size}")]
    [NonAction]
    public virtual async Task<IActionResult> GetWithPagination(int page, int size)
    {
        var result = await _service.GetWithPagination(page, size);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    // [HttpGet("{id}")]\
    [NonAction]
    public virtual async Task<IActionResult> GetById(int id)
    {
        var result = await _service.Get(id);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    // [HttpPost]
    [NonAction]
    public async Task<IActionResult> Create([FromBody] TDto dto)
    {
        var result = await _service.Add(dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Created("", result);
    }
    
    // [HttpPut("{id}")]
    [NonAction]
    public virtual async Task<IActionResult> Update(int id, [FromBody] TDto dto)
    {
        var result = await _service.Update(id, dto);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
    
    // [HttpDelete("{id}")]
    [NonAction]
    public virtual async Task<IActionResult> Delete(int id)
    {
        var result = await _service.Delete(id);
        if (!result.Success)
        {
            return BadRequest(result.Message);
        } 
        return Ok(result);
    }
}