using System.Linq.Expressions;
using Application.Exceptions;
using Application.IServices;
using AutoMapper;
using Domain;
using Domain.Exceptions;
using Domain.IRepositories;

namespace Presentation.Services;

public abstract class BaseService<TDto, TModel> : IBaseService<TDto, TModel> where TDto : class where TModel : class, IEntityBase
{
    protected readonly IRepository<TModel> _repository;
    protected readonly IMapper _mapper;
    
    protected BaseService(IRepository<TModel> repository, IMapper mapper)
    {
        this._repository = repository;
        this._mapper = mapper;
    }
    
    public async Task<ServiceResponse<TDto[]>> GetAll()
    {
        try {
            var entities = await _repository.GetAll();
            var dtos = _mapper.Map<TDto[]>(entities);
            return new ServiceResponse<TDto[]>
            {
                Success = true,
                Message = $"",
                Data = dtos
            };
        } catch (Exception e)
        {
            return new MapperException<TDto[]>(typeof(TModel[]).Name).Response;
        }
    }

    public async Task<ServiceResponse<TDto[]>> GetWithPagination(int page, int size)
    {
        try
        {
            var entities = await _repository.GetWithPagination(page, size);
            var dtos = _mapper.Map<TDto[]>(entities);
            return new ServiceResponse<TDto[]>
            {
                Success = true,
                Message = $"",
                Data = dtos
            };
        } catch (Exception e)
        {
            return new MapperException<TDto[]>(typeof(TModel[]).Name).Response;
        }
    }

    public async Task<ServiceResponse<TDto[]>> GetWithExpression(Expression<Func<TModel, bool>> expression)
    {
        try
        {   
            var entities = await _repository.GetWithExpression(_mapper.Map<Expression<Func<TModel, bool>>>(expression));
            var dtos = _mapper.Map<TDto[]>(entities);
            return new ServiceResponse<TDto[]>
            {
                Success = true,
                Message = $"",
                Data = dtos
            };
        }
        catch (Exception e)
        {
            return new MapperException<TDto[]>(typeof(TModel[]).Name).Response;
        }
    }

    public async Task<ServiceResponse<TDto[]>> GetWithExpressionAndPagination(Expression<Func<TModel, bool>> expression, int page, int size)
    {
        try
        {
            var entities = await _repository.GetWithExpressionAndPagination(_mapper.Map<Expression<Func<TModel, bool>>>(expression), page, size);
            var dtos = _mapper.Map<TDto[]>(entities);
            return new ServiceResponse<TDto[]>
            {
                Success = true,
                Message = $"",
                Data = dtos
            };
        }
        catch (Exception e)
        {
            return new MapperException<TDto[]>(typeof(TModel[]).Name).Response;
        }
    }

    public async Task<ServiceResponse<TDto>> Get(int id)
    {
        try {
            var entity = await _repository.GetById(id);
            var dto = _mapper.Map<TDto>(entity);
            return new ServiceResponse<TDto>
            {
                Success = true,
                Message = $"",
                Data = dto
            };
        } catch (ObjectNotFoundException<TModel> e)
        {
            return new RepositoryException<TDto>(e).Response;
        } catch (Exception e)
        {
            return new MapperException<TDto>(typeof(TModel).Name).Response;
        }
    }

    public virtual async Task<ServiceResponse<TDto>> Add(TDto entity)
    {
        try
        {
            var model = _mapper.Map<TModel>(entity);
            var addedEntity = await _repository.Add(model);
            var dto = _mapper.Map<TDto>(addedEntity);
            return new ServiceResponse<TDto>
            {
                Success = true,
                Message = $"",
                Data = dto
            };
        } catch (CreateFailedException<TModel> e)
        {
            return new RepositoryException<TDto>(e).Response;
        } catch (Exception e)
        {
            return new MapperException<TDto>(typeof(TModel).Name).Response;
        }
    }

    public async Task<ServiceResponse<TDto>> Update(TDto entity)
    {
        try
        {
            var model = _mapper.Map<TModel>(entity);
            var updatedEntity = await _repository.Update(model);
            var dto = _mapper.Map<TDto>(updatedEntity);
            return new ServiceResponse<TDto>
            {
                Success = true,
                Message = $"",
                Data = dto
            };
        } catch (SaveFailedException<TModel> e)
        {
            return new RepositoryException<TDto>(e).Response;
        } catch (Exception e)
        {
            return new MapperException<TDto>(typeof(TModel).Name).Response;
        }
    }

    public async Task<ServiceResponse<bool>> Delete(int id)
    {
        try
        {
            var entity = await _repository.GetById(id);
            var deleted = await _repository.Delete(entity);
            return new ServiceResponse<bool>
            {
                Success = true,
                Message = $"",
                Data = deleted
            };
        }
        catch (ObjectNotFoundException<TModel> e)
        {
            return new RepositoryException<bool>(e).Response;
        }
        catch (DeleteFailedException<TModel> e)
        {
            return new RepositoryException<bool>(e).Response;
        }  
        catch (Exception e)
        {
            return new MapperException<bool>(typeof(TModel).Name).Response;
        }
    }
}