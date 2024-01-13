import IRStudent from '@/logic/repositories/interfaces/IRStudent.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import StudentDto from '@/domain/dtos/StudentDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';
import CreateStudentDto from '@/domain/dtos/CreateStudentDto.ts';
import UserSubjects from '@/domain/dtos/UserSubjects.ts';

const url = 'students';

class RStudent implements IRStudent {
  getStudentsFromClass(
    classId: number,
  ): Promise<ServiceResponse<StudentDto[]>> {
    return axiosInstance.get(`${url}/class/${classId}`).then(response => {
      return response.data;
    });
  }

  getSubjectsFromStudent(): Promise<ServiceResponse<UserSubjects>> {
    return axiosInstance.get(`${url}`).then(response => {
      return response.data;
    });
  }

  getStudent(studentId: number): Promise<ServiceResponse<StudentDto>> {
    return axiosInstance.get(`${url}/${studentId}`).then(response => {
      return response.data;
    });
  }

  createStudent(
    student: CreateStudentDto,
  ): Promise<ServiceResponse<StudentDto>> {
    return axiosInstance.post(`${url}`, student).then(response => {
      return response.data;
    });
  }

  updateStudent(student: StudentDto): Promise<ServiceResponse<StudentDto>> {
    return axiosInstance.put(`${url}/${student.id}`, student).then(response => {
      return response.data;
    });
  }

  deleteStudent(studentId: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(`${url}/${studentId}`).then(response => {
      return response.data;
    });
  }
}

export default RStudent;
