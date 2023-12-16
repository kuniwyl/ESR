import RegisterDto from '@/domain/dtos/RegisterDto.ts';
import { API_URL } from '@/configuration/config.ts';
import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import axios from 'axios';
import LoginDto from '@/domain/dtos/LoginDto.ts';

const AUTH_URL = API_URL + '/user';

class AuthRepository implements IAuthRepository {
  async register(registerDto: RegisterDto) {
    return axios
      .post(AUTH_URL + '/register', registerDto)
      .then(response => response.data);
  }

  async login(loginDto: LoginDto) {
    return axios
      .post(AUTH_URL + '/login', loginDto)
      .then(response => response.data);
  }

  async refreshToken(refreshToken: string) {
    return axios
      .post(AUTH_URL + '/refresh-token', { refreshToken })
      .then(response => response.data);
  }
}

export default AuthRepository;
