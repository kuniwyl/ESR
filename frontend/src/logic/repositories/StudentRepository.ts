import { API_URL, specifiedHeaders } from '@/configuration/config.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';
import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import axios from 'axios';

const STUDENT_URL = API_URL + '/students';

class StudentRepository implements IStudentRepository {
  async getStudents() {
    return axios
      .get(STUDENT_URL, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async getStudent(id: number) {
    return axios
      .get(STUDENT_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async createStudent(studentData: RegisterDto): Promise<void> {
    return axios
      .post(STUDENT_URL, studentData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async updateStudent({
    id,
    studentData,
  }: {
    id: number;
    studentData: RegisterDto;
  }): Promise<void> {
    return axios
      .put(STUDENT_URL + '/' + id, studentData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async deleteStudent(id: number): Promise<void> {
    return axios
      .delete(STUDENT_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }
}

export default StudentRepository;
