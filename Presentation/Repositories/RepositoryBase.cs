using Application.DB.DataContext;
using Domain;
using Domain.IRepositories;

namespace Presentation.Repositories;

public abstract class RepositoryBase<T> : IRepository<T> where T : class, IEntityBase
{
    private readonly SchoolContext _context;

    protected RepositoryBase(SchoolContext context)
    {
        this._context = context;
    }
    
    public async Task<T?> GetById(int id)
    {
        try
        {
            var entity = await _context.Set<T>().FindAsync(id);
            return entity;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return null;
        }
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        try
        {
            return _context.Set<T>();
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return new List<T>();
        }
    }

    public async Task<bool> Add(T entity)
    {
        try
        {
            _context.Set<T>().Add(entity);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<bool> Update(T entity)
    {
        try
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<bool> Delete(T entity)
    {
        try
        {
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }

    public async Task<bool> Edit(T entity)
    {
        try
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();
            return true;
        } catch (Exception e)
        {
            Console.WriteLine(e);
            return false;
        }
    }
}