import Grade from '@/domain/model/Grade.ts';

interface Assigment {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  subjectId: string;
  grades: Grade[];
}

export default Assigment;
