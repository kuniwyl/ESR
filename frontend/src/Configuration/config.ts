const LOGIN = () => '/login';
const LOGOUT = () => '/logout';

const RESET_PASSWORD = (id: string) => '/reset-password/' + id;

// System Admin
const SYSTEM_ADMIN = () => '/sa';
const SYSTEM_ADMINS = () => `${SYSTEM_ADMIN()}/admins`;
const SYSTEM_ADMIN_EDIT = (adminId: string) => `${SYSTEM_ADMINS()}/${adminId}`;
const SYSTEM_ADMIN_ADD = () => `${SYSTEM_ADMINS()}/add`;
const SHOW_SCHOOLS = () => `${SYSTEM_ADMIN()}/schools`;
const CREATE_SCHOOL = () => `${SYSTEM_ADMIN()}/schools/create`;
const EDIT_SCHOOL = (shoolId: string) =>
  `${SYSTEM_ADMIN()}/school/edit/${shoolId}`;
const CREATE_SCHOOL_ADMIN = (shoolId: string) =>
  `${EDIT_SCHOOL(shoolId)}/admins/create`;
const EDIT_SCHOOL_ADMIN_EDIT = (shoolId: string, adminId: string) =>
  `${EDIT_SCHOOL(shoolId)}/admins/edit/${adminId}`;

// School Admin
const SCHOOL_ADMIN = () => '/sha';
const SHOW_CLASSES = () => `${SCHOOL_ADMIN()}/classes`;
const EDIT_CLASS = (classId: string) => `${SCHOOL_ADMIN()}/classes/${classId}`;
const EDIT_CLASS_SUBJECTS = (classId: string) =>
  `${SCHOOL_ADMIN()}/classes/${classId}/subjects`;
const EDIT_CLASS_STUDENTS = (classId: string) =>
  `${SCHOOL_ADMIN()}/classes/${classId}/students`;
const EDIT_CLASS_STUDENTS_ADD = (classId: string) =>
  `${SCHOOL_ADMIN()}/classes/${classId}/students/add`;
const EDIT_CLASS_STUDENTS_EDIT = (classId: string, studnetId: string) =>
  `${SCHOOL_ADMIN()}/classes/${classId}/students/${studnetId}`;

const EDIT_CLASS_PARENTS = (classId: string) =>
  `${SCHOOL_ADMIN()}/classes/${classId}/parents`;
const EDIT_CLASS_PARENTS_ADD = (classId: string) =>
  `${SCHOOL_ADMIN()}/classes/${classId}/parents/add`;
const EDIT_CLASS_PARENTS_EDIT = (classId: string, parentId: string) =>
  `${SCHOOL_ADMIN()}/classes/${classId}/parents/${parentId}`;

const ADD_CLASS = () => `${SCHOOL_ADMIN()}/classes/add`;
const SEMESTERS_SHOW = () => `${SCHOOL_ADMIN()}/semesters`;
const SEMESTER_ADD = () => `${SCHOOL_ADMIN()}/semesters/add`;
const SEMESTER_EDIT = (semesterId: string) =>
  `${SCHOOL_ADMIN()}/semesters/${semesterId}`;

const SHOW_STUDENTS = () => `${SCHOOL_ADMIN()}/students`;

const SHOW_SUBJECTS = () => `${SCHOOL_ADMIN()}/subjects`;
const ADD_SUBJECT = () => `${SCHOOL_ADMIN()}/subjects/add`;
const EDIT_SUBJECT = (subjectId: string) =>
  `${SCHOOL_ADMIN()}/subjects/${subjectId}`;

const TEACHERS_SHOW = () => `${SCHOOL_ADMIN()}/teachers`;
const TEACHERS_ADD = () => `${SCHOOL_ADMIN()}/teachers/add`;
const TEACHERS_EDIT = (teacherId: string) =>
  `${SCHOOL_ADMIN()}/teachers/${teacherId}`;

const SHOW_PARENTS = () => `${SCHOOL_ADMIN()}/parents`;

// Teacher
const TEACHER_BASE = () => '/teacher';
const TEACHER_MAIN = () => `${TEACHER_BASE()}/main`;
const TEACHER_SUBJECTS = () => `${TEACHER_BASE()}/subjects`;
const TEACHER_SUBJECTS_GRADES = (cssId: string) =>
  `${TEACHER_SUBJECTS()}/${cssId}/grades`;
const TEACHER_SUBJECTS_FREQUENCIES = (subjectId: string) =>
  `${TEACHER_SUBJECTS()}/${subjectId}/frequencies`;

const TEACHER_NOTICE = () => `${TEACHER_BASE()}/notice`;

// Student
const STUDENT_BASE = () => '/student';
const STUDENT_MAIN = () => `${STUDENT_BASE()}/main`;
const STUDENT_SUBJECTS = () => `${STUDENT_BASE()}/subjects`;
const STUDENT_NOTIFICATONS = () => `${STUDENT_BASE()}/notifications`;

const PARENT_BASE = () => '/parent';
const PARENT_MAIN = () => `${PARENT_BASE()}/main`;
const PARENT_SUBJECTS = () => `${PARENT_BASE()}/subjects`;
const PARENT_NOTIFICATONS = () => `${PARENT_BASE()}/notifications`;
export const ROUTES = {
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,

  SYSTEM_ADMIN,
  SYSTEM_ADMINS,
  SYSTEM_ADMIN_EDIT,
  SYSTEM_ADMIN_ADD,
  SHOW_SCHOOLS,
  CREATE_SCHOOL,
  EDIT_SCHOOL,
  CREATE_SCHOOL_ADMIN,
  EDIT_SCHOOL_ADMIN_EDIT,

  SCHOOL_ADMIN,
  CLASSES_SHOW: SHOW_CLASSES,
  CLASS_ADD: ADD_CLASS,
  SEMESTERS_SHOW: SEMESTERS_SHOW,
  SEMESTER_ADD: SEMESTER_ADD,
  SEMESTER_EDIT: SEMESTER_EDIT,
  CLASS_EDIT: EDIT_CLASS,
  CLASS_SUBJECTS: EDIT_CLASS_SUBJECTS,
  CLASS_STUDENTS: EDIT_CLASS_STUDENTS,
  CLASS_STUDENTS_ADD: EDIT_CLASS_STUDENTS_ADD,
  CLASS_STUDENTS_EDIT: EDIT_CLASS_STUDENTS_EDIT,
  CLASS_PARENTS_EDIT: EDIT_CLASS_PARENTS,
  EDIT_CLASS_PARENTS_ADD,
  EDIT_CLASS_PARENTS_EDIT,
  SHOW_STUDENTS,
  TEACHERS_SHOW: TEACHERS_SHOW,
  TEACHERS_ADD: TEACHERS_ADD,
  TEACHERS_EDIT: TEACHERS_EDIT,
  SUBJECTS_SHOW: SHOW_SUBJECTS,
  SUBJECT_ADD: ADD_SUBJECT,
  SUBJECT_EDIT: EDIT_SUBJECT,
  SHOW_PARENTS,

  TEACHER_BASE,
  TEACHER_MAIN,
  TEACHER_SUBJECTS,
  TEACHER_SUBJECTS_GRADES,
  TEACHER_SUBJECTS_FREQUENCIES,
  TEACHER_NOTICE,

  STUDENT_BASE,
  STUDENT_MAIN,
  STUDENT_SUBJECTS,
  STUDENT_NOTIFICATONS,

  PARENT_BASE,
  PARENT_MAIN,
  PARENT_SUBJECTS,
  PARENT_NOTIFICATONS,
};
