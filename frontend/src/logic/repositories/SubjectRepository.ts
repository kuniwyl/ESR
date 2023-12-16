import { API_URL, specifiedHeaders } from '@/configuration/config.ts';
import SubjectDto from '@/domain/dtos/SubjectDto.ts';
import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import axios from 'axios';

const SUBJECT_URL = API_URL + '/subjects';

class SubjectRepository implements ISubjectRepository {
  getSubjects() {
    return axios
      .get(SUBJECT_URL, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  getSubject(id: number) {
    return axios
      .get(SUBJECT_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  createSubject(subjectDto: SubjectDto) {
    return axios
      .post(SUBJECT_URL, subjectDto, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  updateSubject({ id, subjectData }: { id: number; subjectData: SubjectDto }) {
    return axios
      .put(SUBJECT_URL + '/' + id, subjectData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  deleteSubject(id: number) {
    return axios
      .delete(SUBJECT_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  getStudents(id: number) {
    return axios
      .get(SUBJECT_URL + '/' + id + '/students', {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  addStudent({ id, studentId }: { id: number; studentId: number }) {
    return axios
      .post(SUBJECT_URL + '/' + id + '/students/' + studentId, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  removeStudent({ id, studentId }: { id: number; studentId: number }) {
    return axios
      .delete(SUBJECT_URL + '/' + id + '/students/' + studentId, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }
}

export default SubjectRepository;
