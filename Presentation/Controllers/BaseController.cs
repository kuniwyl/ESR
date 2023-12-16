using Application.IServices;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

public class BaseController<TDto, TModel> : ControllerBase
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
    
    [HttpGet]
    public virtual async Task<IActionResult> GetAll()
    {
        var result = await _service.GetAll();
        return Ok(result);
    }
    
    [HttpGet("page/{page}/size/{size}")]
    public virtual async Task<IActionResult> GetWithPagination(int page, int size)
    {
        var result = await _service.GetWithPagination(page, size);
        return Ok(result);
    }
    
    [HttpGet("{id}")]
    public virtual async Task<IActionResult> GetById(int id)
    {
        var result = await _service.Get(id);
        return Ok(result);
    }
    
    [HttpPost]
    public virtual async Task<IActionResult> Create([FromBody] TDto dto)
    {
        var result = await _service.Add(dto);
        return Ok(result);
    }
    
    [HttpPut("{id}")]
    public virtual async Task<IActionResult> Update(int id, [FromBody] TDto dto)
    {
        var result = await _service.Update(dto);
        return Ok(result);
    }
    
    [HttpDelete("{id}")]
    public virtual async Task<IActionResult> Delete(int id)
    {
        var result = await _service.Delete(id);
        return Ok(result);
    }
}