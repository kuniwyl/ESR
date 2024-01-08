using Domain.Entities_v2.Users;

namespace Domain.IRepositories.Users;

public interface IUserRepository
{
    Task<bool> IsLoginExist(string login);
    Task<User> GetByLogin(string login);
    Task<User> GetByRefreshToken(string refreshToken);
    Task<User> GetById(int id);
    Task<bool> ResetPassword(User user);
}