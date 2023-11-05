namespace Domain.IRepositories;

public interface IRepository<T> where T : IEntityBase
{
    Task<T?> GetById(int id);
    Task<IEnumerable<T>> GetAll();
    Task<bool> Add(T entity);
    Task<bool> Update(T entity);
    Task<bool> Delete(T entity);
    Task<bool> Edit(T entity);
}