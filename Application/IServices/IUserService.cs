using Domain.Entities;

namespace Application.IServices;

public interface IUserService
{
    Task<bool> IsUserExist(string login);
    Task<IUser?> GetUser(string login);
    Task<IUser?> GetUserByRefreshToken(string refreshToken);
}