using System.Linq.Expressions;
using Domain;
using Domain.Models;

namespace Application.IServices;

public interface IBaseService<TDto, TModel> where TDto : class where TModel : class, IEntityBase
{
    Task<ServiceResponse<TDto[]>> GetAll();
    Task<ServiceResponse<TDto[]>> GetWithPagination(int page, int size);
    Task<ServiceResponse<TDto>> Get(int id);
    Task<ServiceResponse<TDto>> Add(TDto entity);
    Task<ServiceResponse<TDto>> Update(int id, TDto entity);
    Task<ServiceResponse<bool>> Delete(int id);
}