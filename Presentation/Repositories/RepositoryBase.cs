using System.Linq.Expressions;
using Application.DB.DataContext;
using Domain;
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
    
    public async Task<T?> GetById(int id)
    {
        var entity = await _context.Set<T>().FindAsync(id);
        if (entity == null)
        {
            throw new ObjectNotFoundException<T>(id);
        }
        return entity;
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        var entities = await _context.Set<T>().ToListAsync();
        return entities;
    }

    public async Task<IEnumerable<T>> GetWithPagination(int page, int size)
    {
        var entities = await _context.Set<T>().Skip((page - 1) * size).Take(size).ToListAsync();
        return entities;
    }

    public async Task<IEnumerable<T>> GetWithExpression(Expression<Func<T, bool>> expression)
    {
        var entities = await _context.Set<T>().Where(expression).ToListAsync();
        return entities;
    }

    public async Task<IEnumerable<T>> GetWithExpressionAndPagination(Expression<Func<T, bool>> expression, int page, int size)
    {
        var entities = await _context.Set<T>().Where(expression).Skip((page - 1) * size).Take(size).ToListAsync();
        return entities;
    }

    public async Task<T> Add(T entity)
    {
        try
        {
            var addedEntity = await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return addedEntity.Entity;
        } catch (Exception e)
        {
            throw new CreateFailedException<T>(entity, e);
        }
        
    }

    public async Task<T> Update(T entity)
    {
        try
        {
            var updatedEntity = _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();
            return updatedEntity.Entity;
        } catch (Exception e)
        {
            throw new SaveFailedException<T>(entity);
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
            throw new DeleteFailedException<T>(entity);
        }
    }
}