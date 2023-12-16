import Student from '@/domain/model/Student.ts';

interface Parent {
  id: string;
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  student: Student;
}

export default Parent;
