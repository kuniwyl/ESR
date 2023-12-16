import SchoolAdmin from '@/domain/model/SchoolAdmin.ts';
import Student from '@/domain/model/Student.ts';
import Teacher from '@/domain/model/Teacher.ts';
import Parent from '@/domain/model/Parent.ts';
import Subject from '@/domain/model/Subject.ts';
import Class from '@/domain/model/Class.ts';

interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  website: string;
  logoUrl: string;
  schoolAdmins: SchoolAdmin[];

  students: Student[];
  teachers: Teacher[];
  parents: Parent[];

  subjects: Subject[];
  classes: Class[];
}

export default School;
