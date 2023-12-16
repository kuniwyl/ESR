import LoginDto from '@/domain/dtos/LoginDto.ts';
import AuthDto from '@/domain/dtos/AuthDto.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

interface IAuthRepository {
  login(loginDto: LoginDto): Promise<AuthDto>;

  register(registerDto: RegisterDto): Promise<UserDto>;

  refreshToken(refreshToken: string): Promise<AuthDto>;
}

export default IAuthRepository;
