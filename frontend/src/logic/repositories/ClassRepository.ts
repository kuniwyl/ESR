import { API_URL, specifiedHeaders } from '@/configuration/config.ts';
import ClassDto from '@/domain/dtos/ClassDto.ts';
import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import axios from 'axios';

const CLASS_URL = API_URL + '/classes';

class ClassRepository implements IClassRepository {
  getClasses() {
    return axios
      .get(CLASS_URL, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  getClass(id: number) {
    return axios
      .get(CLASS_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  createClass(classDto: ClassDto) {
    return axios
      .post(CLASS_URL, classDto, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  updateClass({ id, classData }: { id: number; classData: ClassDto }) {
    return axios
      .put(CLASS_URL + '/' + id, classData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  deleteClass(id: number) {
    return axios
      .delete(CLASS_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  getStudents(id: number) {
    return axios
      .get(CLASS_URL + '/' + id + '/students', {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  addStudent({ id, studentId }: { id: number; studentId: number }) {
    return axios
      .post(
        CLASS_URL + '/' + id + '/students',
        { studentId },
        {
          headers: specifiedHeaders(),
        },
      )
      .then(response => response.data);
  }

  removeStudent({ id, studentId }: { id: number; studentId: number }) {
    return axios
      .delete(CLASS_URL + '/' + id + '/students/' + studentId, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }
}

export default ClassRepository;
