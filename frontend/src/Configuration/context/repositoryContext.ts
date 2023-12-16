import AuthRepository from '@/logic/repositories/AuthRepository.ts';
import TeacherRepository from '@/logic/repositories/TeacherRepository.ts';
import SystemAdminRepository from '@/logic/repositories/SystemAdminRepository.ts';
import SubjectRepository from '@/logic/repositories/SubjectRepository.ts';
import StudentRepository from '@/logic/repositories/StudentRepository.ts';
import SchoolRepository from '@/logic/repositories/SchoolRepository.ts';
import ParentRepository from '@/logic/repositories/ParentRepository.ts';
import ClassRepository from '@/logic/repositories/ClassRepository.ts';
import IAuthRepository from '@/logic/interfaces/repositoires/IAuthRepository.ts';
import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import ISchoolRepository from '@/logic/interfaces/repositoires/ISchoolRepository.ts';
import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';

const authRepository: IAuthRepository = new AuthRepository();
const classRepository: IClassRepository = new ClassRepository();
const parentRepository: IParentRepository = new ParentRepository();
const schoolRepository: ISchoolRepository = new SchoolRepository();
const studentRepository: IStudentRepository = new StudentRepository();
const subjectRepository: ISubjectRepository = new SubjectRepository();
const systemAdminRepository: ISystemAdminRepository =
  new SystemAdminRepository();
const teacherRepository: ITeacherRepository = new TeacherRepository();

interface injectRepositoryProps {
  type:
    | 'auth'
    | 'class'
    | 'parent'
    | 'school'
    | 'student'
    | 'subject'
    | 'systemAdmin'
    | 'teacher';
}

const injectRepository = (props: injectRepositoryProps) => {
  const { type } = props;

  switch (type) {
    case 'auth':
      return authRepository;
    case 'class':
      return classRepository;
    case 'parent':
      return parentRepository;
    case 'school':
      return schoolRepository;
    case 'student':
      return studentRepository;
    case 'subject':
      return subjectRepository;
    case 'systemAdmin':
      return systemAdminRepository;
    case 'teacher':
      return teacherRepository;
    default:
      return null;
  }
};

export default injectRepository;
