import Student from '@/domain/model/Student.ts';

interface Class {
  id: string;
  name: string;
  description: string;

  students: Student[];

  teacherId: string;
  teacherName: string;
}

export default Class;
