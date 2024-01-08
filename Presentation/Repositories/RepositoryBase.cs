using System.Linq.Expressions;
using Application.DB.DataContext;
using Domain;
using Domain.Entities_v2.Types;
using Domain.Exceptions;
using Domain.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace Presentation.Repositories;

public abstract class RepositoryBase<T> : IRepository<T> where T : class, IEntityBase
{
    protected readonly SchoolContext _context;
    
    protected RepositoryBase(SchoolContext context)
    {
        _context = context;
    }

    public async Task<bool> Exists(int id)
    {
        var entity = await _context.Set<T>()
            .Where(x => x.Status != Status.Deleted)
            .Where(x => x.Id == id)
            .FirstOrDefaultAsync();
        return entity != null;
    }

    public async Task<T?> GetById(int id)
    {
        var entity = await _context.Set<T>().Where(x => x.Status != Status.Deleted).Where(x => x.Id == id).FirstOrDefaultAsync();
        if (entity == null)
        {
            throw new ObjectNotFoundException<T>(id);
        }    
        return entity;
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        var entities = await _context.Set<T>()
            .Where(x => x.Status != Status.Deleted)
            .ToListAsync();
        return entities;    
    }

    public async Task<IEnumerable<T>> GetWithPagination(int page, int size)
    {
        var entities = await _context.Set<T>().Where(x => x.Status != Status.Deleted).Skip((page - 1) * size).Take(size).ToListAsync();
        return entities;
    }

    public async Task<IEnumerable<T>> GetWithExpression(Expression<Func<T, bool>> expression)
    {
        var entities = await _context.Set<T>().Where(x => x.Status != Status.Deleted).Where(expression).ToListAsync();
        return entities;
    }

    public async Task<IEnumerable<T>> GetWithExpressionAndPagination(Expression<Func<T, bool>> expression, int page, int size)
    {
        var entities = await _context.Set<T>().Where(x => x.Status != Status.Deleted).Where(expression).Skip((page - 1) * size).Take(size).ToListAsync();
        return entities;
    }

    public async Task<T> Add(T entity)
    {
        var addedEntity = await _context.Set<T>().AddAsync(entity);
        return addedEntity.Entity;
    }

    public async Task<T> Update(T entity)
    {
        if (entity.Status == Status.Deleted)
        {
            throw new DeleteModifyException(entity.Id);
        }
        var updatedEntity = _context.Set<T>().Update(entity);
        return updatedEntity.Entity;
    }

    public async Task<bool> Delete(T entity)
    {
        entity.Status = Status.Deleted;
        entity.Updated = DateTime.UtcNow;
        return true;
    }

    public async Task<bool> SaveChanges()
    {
        Console.WriteLine("Saving changes");
        await _context.SaveChangesAsync();
        return true;
    }
}