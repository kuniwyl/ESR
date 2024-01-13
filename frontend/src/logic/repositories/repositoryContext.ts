import IRSchool from '@/logic/repositories/interfaces/IRSchool.ts';
import RSchool from '@/logic/repositories/implementation/RSchool.ts';
import IRSystemAdmin from '@/logic/repositories/interfaces/IRSystemAdmin.ts';
import RSystemAdmin from '@/logic/repositories/implementation/RSystemAdmin.ts';
import IRSchoolAdmin from '@/logic/repositories/interfaces/IRSchoolAdmin.ts';
import RSchoolAdmin from '@/logic/repositories/implementation/RSchoolAdmin.ts';
import IRAuth from '@/logic/repositories/interfaces/IRAuth.ts';
import RAuth from '@/logic/repositories/implementation/RAuth.ts';
import RSemester from '@/logic/repositories/implementation/RSemester.ts';
import IRSemester from '@/logic/repositories/interfaces/IRSemester.ts';
import RClass from '@/logic/repositories/implementation/RClass.ts';
import IRClass from '@/logic/repositories/interfaces/IRClass.ts';
import IRTeachers from '@/logic/repositories/interfaces/IRTeachers.ts';
import RTeacher from '@/logic/repositories/implementation/RTeacher.ts';
import IRSubject from '@/logic/repositories/interfaces/IRSubject.ts';
import RSubject from '@/logic/repositories/implementation/RSubject.ts';
import RStudent from '@/logic/repositories/implementation/RStudent.ts';
import IRStudent from '@/logic/repositories/interfaces/IRStudent.ts';
import RParent from '@/logic/repositories/implementation/RParent.ts';
import IRParent from '@/logic/repositories/interfaces/IRParent.ts';
import IRCss from '@/logic/repositories/interfaces/IRCss.ts';
import RCss from '@/logic/repositories/implementation/RCss.ts';
import IRCssInstance from '@/logic/repositories/interfaces/IRCssInstance.ts';
import RCssInstance from '@/logic/repositories/implementation/RCssInstance.ts';
import RGrade from '@/logic/repositories/implementation/RGrade.ts';
import IRGrade from '@/logic/repositories/interfaces/IRGrade.ts';
import RFinalGrade from '@/logic/repositories/implementation/RFinalGrade.ts';
import IRLesson from '@/logic/repositories/interfaces/IRLesson.ts';
import RLesson from '@/logic/repositories/implementation/RLesson.ts';
import IRPresence from '@/logic/repositories/interfaces/IRPresence.ts';
import RPresence from '@/logic/repositories/implementation/RPresence.ts';
import IRNotice from '@/logic/repositories/interfaces/IRNotice.ts';
import RNotice from '@/logic/repositories/implementation/RNotice.ts';

const auth: IRAuth = new RAuth();
const systemAdmin: IRSystemAdmin = new RSystemAdmin();
const school: IRSchool = new RSchool();
const schoolAdmin: IRSchoolAdmin = new RSchoolAdmin();
const semester: IRSemester = new RSemester();
const classR: IRClass = new RClass();
const teacher: IRTeachers = new RTeacher();
const subject: IRSubject = new RSubject();
const student: IRStudent = new RStudent();
const parent: IRParent = new RParent();
const css: IRCss = new RCss();
const cssInstance: IRCssInstance = new RCssInstance();
const grade: IRGrade = new RGrade();
const finalGrade: RFinalGrade = new RFinalGrade();
const lesson: IRLesson = new RLesson();
const presence: IRPresence = new RPresence();
const notice: IRNotice = new RNotice();

const repositoryContext = {
  auth,
  systemAdmin,
  school,
  schoolAdmin,
  semester,
  classR,
  teacher,
  subject,
  student,
  parent,
  css,
  cssInstance,
  grade,
  finalGrade,
  lesson,
  presence,
  notice,
};

export default repositoryContext;
