import { API_URL, specifiedHeaders } from '@/configuration/config.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';
import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import UserShortDto from '@/domain/dtos/UserShortDto.ts';
import axios from 'axios';

const TEACHER_URL = API_URL + '/teachers';

class TeacherRepository implements ITeacherRepository {
  getTeachers(): Promise<UserShortDto[]> {
    return axios
      .get(TEACHER_URL, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  getTeacher(id: number): Promise<UserDto> {
    return axios
      .get(TEACHER_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  createTeacher(teacherData: RegisterDto): Promise<void> {
    return axios
      .post(TEACHER_URL, teacherData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  updateTeacher({
    id,
    teacherData,
  }: {
    id: number;
    teacherData: RegisterDto;
  }): Promise<void> {
    return axios
      .put(TEACHER_URL + '/' + id, teacherData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  deleteTeacher(id: number): Promise<void> {
    return axios
      .delete(TEACHER_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }
}

export default TeacherRepository;
