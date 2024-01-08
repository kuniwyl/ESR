import IRAuth from '@/logic/repositories/interfaces/IRAuth.ts';
import LoginDto from '@/domain/dtos/LoginDto.ts';
import AuthDto from '@/domain/dtos/AuthDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';
import UserDto from '@/domain/dtos/UserDto.ts';
import ResetPasswordDto from '@/domain/dtos/ResetPasswordDto.ts';

const url = '/auth';

class RAuth implements IRAuth {
  login(loginDto: LoginDto): Promise<AuthDto> {
    return axiosInstance.post(url + '/login', loginDto).then(response => {
      return response.data;
    });
  }

  refreshToken(refreshToken: string): Promise<AuthDto> {
    return axiosInstance
      .post(url + '/refresh-token', { refreshToken })
      .then(response => {
        return response.data;
      });
  }

  getUser(id: number): Promise<UserDto> {
    return axiosInstance.get(url + '/user/' + id).then(response => {
      return response.data;
    });
  }

  resetPassword(password: ResetPasswordDto): Promise<boolean> {
    return axiosInstance
      .put(url + '/user/' + password.id + '/reset-password', password)
      .then(response => {
        return response.data;
      });
  }
}

export default RAuth;
