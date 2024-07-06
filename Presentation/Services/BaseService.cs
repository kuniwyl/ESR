using System.Linq.Expressions;
using Application.Dto;
using Application.Dto.School;
using Application.Exceptions;
using Application.IServices;
using AutoMapper;
using Domain;
using Domain.Entities_v2.Types;
using Domain.Entities_v2.Users;
using Domain.Exceptions;
using Domain.IRepositories;
using Domain.Models;

namespace Presentation.Services;

public abstract class BaseService<TDto, TModel> : IBaseService<TDto, TModel> where TDto : class, IBaseDto where TModel : class, IEntityBase
{
    protected readonly IRepository<TModel> _repository;
    protected readonly IExistRepository _existRepository;
    protected readonly IMapper _mapper;
    protected readonly IHttpContextAccessor _contextAccessor;
    
    protected BaseService(IRepository<TModel> repository, IMapper mapper, IExistRepository existRepository, IHttpContextAccessor contextAccessor)
    {
        this._repository = repository;
        this._mapper = mapper;
        this._existRepository = existRepository;
        this._contextAccessor = contextAccessor;
    }
    
    public async Task<ServiceResponse<TDto[]>> GetAll()
    {
        var entities = await _repository.GetAll();
        var dtos = _mapper.Map<TDto[]>(entities);
        return new ServiceResponse<TDto[]>
        {
            Success = true,
            Message = $"",
            Data = dtos
        };
    }

    public async Task<ServiceResponse<TDto[]>> GetWithPagination(int page, int size)
    {
        var entities = await _repository.GetWithPagination(page, size);
        var dtos = _mapper.Map<TDto[]>(entities);
        return new ServiceResponse<TDto[]>
        {
            Success = true,
            Message = $"",
            Data = dtos
        };
    }

    public async Task<ServiceResponse<TDto>> Get(int id)
    {
        var entity = await _repository.GetById(id);
        var dto = _mapper.Map<TDto>(entity);
     
        if (!await Authorize(dto))
        {
            throw new NotAuthorizedException<Teacher>("You are not authorized to do this action");
        }
        
        return new ServiceResponse<TDto>
        {
            Success = true,
            Message = $"",
            Data = dto
        };
    }

    public virtual async Task<ServiceResponse<TDto>> Add(TDto entity)
    {
        if (!await Authorize(entity))
        {
            throw new NotAuthorizedException<Teacher>("You are not authorized to do this action");
        }
        
        var model = _mapper.Map<TModel>(entity);
        var addedEntity = await _repository.Add(model);
        await _repository.SaveChanges();
        var dto = _mapper.Map<TDto>(addedEntity);
        return new ServiceResponse<TDto>
        {
            Success = true,
            Message = $"",
            Data = dto
        };
    }

    public async Task<ServiceResponse<TDto>> Update(int id, TDto entity)
    {
        if (id != entity.Id)
        {
            throw new ValidationException<TDto>("Id is not valid");
        }
        
        if (!await Authorize(entity))
        {
            throw new NotAuthorizedException<Teacher>("You are not authorized to do this action");
        }
        
        var model = await _repository.GetById(id);
        if (model == null)
        {
            throw new ObjectNotFoundException<TModel>(id);
        }
        
        _mapper.Map(entity, model);
        var updatedEntity = await _repository.Update(model);
        await _repository.SaveChanges();
        
        Console.WriteLine("update entity");
        var dto = _mapper.Map<TDto>(updatedEntity);
        
        return new ServiceResponse<TDto>
        {
            Success = true,
            Message = $"",
            Data = dto
        };
    }

    public async Task<ServiceResponse<bool>> Delete(int id)
    {
        var entity = await _repository.GetById(id);
        if (entity == null)
        {
            throw new ObjectNotFoundException<TModel>(id);
        }
        
        if (!await Authorize(_mapper.Map<TDto>(entity)))
        {
            throw new NotAuthorizedException<Teacher>("You are not authorized to do this action");
        }
        
        var deleted = await _repository.Delete(entity);
        await _repository.SaveChanges();
        return new ServiceResponse<bool>
        {
            Success = true,
            Message = $"",
            Data = deleted
        };
    }
    
    public abstract void Validate(TDto entity);
    public abstract Task<bool> Authorize(TDto entity);
}