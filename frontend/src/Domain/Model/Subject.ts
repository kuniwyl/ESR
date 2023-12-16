import Student from '@/domain/model/Student.ts';
import Assigment from '@/domain/model/Assigment.ts';

interface Subject {
  id: string;
  name: string;
  description: string;

  students: Student[];
  assignments: Assigment[];
}

export default Subject;
