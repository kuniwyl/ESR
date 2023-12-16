using System.Linq.Expressions;

namespace Domain.IRepositories;

public interface IRepository<T> where T : IEntityBase
{
    Task<T?> GetById(int id);
    Task<IEnumerable<T>> GetAll();
    Task<IEnumerable<T>> GetWithPagination(int page, int size);
    Task<IEnumerable<T>> GetWithExpression(Expression<Func<T, bool>> expression);
    Task<IEnumerable<T>> GetWithExpressionAndPagination(Expression<Func<T, bool>> expression, int page, int size);
    Task<T> Add(T entity);
    Task<T> Update(T entity);
    Task<bool> Delete(T entity);
}