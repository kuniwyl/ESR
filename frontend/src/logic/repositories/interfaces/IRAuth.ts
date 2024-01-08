import LoginDto from '@/domain/dtos/LoginDto.ts';
import AuthDto from '@/domain/dtos/AuthDto.ts';
import UserDto from '@/domain/dtos/UserDto.ts';
import ResetPasswordDto from '@/domain/dtos/ResetPasswordDto.ts';

interface IRAuth {
  login(loginDto: LoginDto): Promise<AuthDto>;
  refreshToken(refreshToken: string): Promise<AuthDto>;
  getUser(id: number): Promise<UserDto>;
  resetPassword(password: ResetPasswordDto): Promise<boolean>;
}

export default IRAuth;
