import AuthRepository from '@/logic/repositories/AuthRepository.ts';
import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import SystemAdminRepository from '@/logic/repositories/SystemAdminRepository.ts';
import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import ClassRepository from '@/logic/repositories/ClassRepository.ts';
import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import ParentRepository from '@/logic/repositories/ParentRepository.ts';
import ISchoolRepository from '@/logic/interfaces/repositoires/ISchoolRepository.ts';
import SchoolRepository from '@/logic/repositories/SchoolRepository.ts';
import TeacherRepository from '@/logic/repositories/TeacherRepository.ts';
import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import SubjectRepository from '@/logic/repositories/SubjectRepository.ts';
import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import StudentRepository from '@/logic/repositories/StudentRepository.ts';
import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';

const authRepository: IAuthRepository = new AuthRepository();
const classRepository: IClassRepository = new ClassRepository();
const parentRepository: IParentRepository = new ParentRepository();
const schoolRepository: ISchoolRepository = new SchoolRepository();
const studentRepository: IStudentRepository = new StudentRepository();
const subjectRepository: ISubjectRepository = new SubjectRepository();
const systemAdminRepository: ISystemAdminRepository =
  new SystemAdminRepository();
const teacherRepository: ITeacherRepository = new TeacherRepository();

export {
  authRepository,
  classRepository,
  parentRepository,
  schoolRepository,
  studentRepository,
  subjectRepository,
  systemAdminRepository,
  teacherRepository,
};
