import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '@/features/layouts/DefaultLayout.tsx';
import { ROUTES } from '@/configuration/config.ts';
import SystemAdminLayout from '@/features/systemAdmin/SystemAdminLayout.tsx';
import VSchool from '@/features/school/VSchool.tsx';
import VSystemAdmins from '@/features/systemAdmin/VSystemAdmins.tsx';
import VSchools from '@/features/school/VSchools.tsx';
import VLogin from '@/features/auth/login/VLogin.tsx';
import SchoolAdminLayout from '@/features/schoolAdmin/SchoolAdminLayout.tsx';
import VClasses from '@/features/classes/VClasses.tsx';
import VSchoolSemesters from '@/features/semesters/VSchoolSemesters.tsx';
import VSemester from '@/features/semesters/VSemester.tsx';
import VTeachersShow from '@/features/teachers/VTeachersShow.tsx';
import VClass from '@/features/classes/VClass.tsx';
import VSubjects from '@/features/subject/VSubjects.tsx';
import VSubject from '@/features/subject/VSubject.tsx';
import VClassSubject from '@/features/classes/VClassSubject.tsx';
import VClassStudents from '@/features/classes/VClassStudents.tsx';
import VStudent from '@/features/students/VStudent.tsx';
import VTeacherMain from '@/features/teacher/views/VTeacherMain.tsx';
import TeacherLayout from '@/features/teacher/TeacherLayout.tsx';
import VTeachersSubjects from '@/features/teacher/views/VTeachersSubjects.tsx';
import VSchoolAdmin from '@/features/schoolAdmin/VSchoolAdmin.tsx';
import VResetPassword from '@/features/users/resetPassword/VResetPassword.tsx';
import VSystemAdmin from '@/features/systemAdmin/VSystemAdmin.tsx';
import VTeacher from '@/features/teachers/VTeacher.tsx';
import VTeacherGrades from '@/features/teacher/views/VTeacherGrades.tsx';
import VTeacherAttendance from '@/features/teacher/views/VTeacherAttendance.tsx';
import VTeacherNotice from '@/features/teacher/views/VTeacherNotice.tsx';
import StudentLayout from '@/features/student/StudentLayout.tsx';
import VStudTimeTable from '@/features/student/timetable/VStudTimeTable.tsx';
import VStudSubjects from '@/features/student/subjects/VStudSubjects.tsx';
import VStudNotification from '@/features/student/notification/VStudNotification.tsx';
import ParentRequired from '@/features/layouts/ParentRequired.ts';
import ParentLayout from '@/features/layouts/ParentLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/login',
        element: <VLogin />,
      },
      {
        path: ROUTES.RESET_PASSWORD(':id'),
        element: <VResetPassword />,
      },
    ],
  },
  {
    path: ROUTES.SYSTEM_ADMIN(),
    element: <SystemAdminLayout />,
    children: [
      {
        path: ROUTES.SYSTEM_ADMINS(),
        element: <VSystemAdmins />,
      },
      {
        path: ROUTES.SYSTEM_ADMIN_ADD(),
        element: <VSystemAdmin />,
      },
      {
        path: ROUTES.SYSTEM_ADMIN_EDIT(':id'),
        element: <VSystemAdmin />,
      },
      {
        path: ROUTES.SHOW_SCHOOLS(),
        element: <VSchools />,
      },
      {
        path: ROUTES.EDIT_SCHOOL(':id'),
        element: <VSchool />,
      },
      {
        path: ROUTES.CREATE_SCHOOL(),
        element: <VSchool />,
      },
      {
        path: ROUTES.CREATE_SCHOOL_ADMIN(':id'),
        element: <VSchoolAdmin />,
      },
      {
        path: ROUTES.EDIT_SCHOOL_ADMIN_EDIT(':id', ':adminId'),
        element: <VSchoolAdmin />,
      },
    ],
  },
  {
    path: ROUTES.SCHOOL_ADMIN(),
    element: <SchoolAdminLayout />,
    children: [
      {
        path: ROUTES.SEMESTERS_SHOW(),
        element: <VSchoolSemesters />,
      },
      {
        path: ROUTES.SEMESTER_EDIT(':id'),
        element: <VSemester />,
      },
      {
        path: ROUTES.SEMESTER_ADD(),
        element: <VSemester />,
      },
      {
        path: ROUTES.CLASSES_SHOW(),
        element: <VClasses />,
      },
      {
        path: ROUTES.CLASS_ADD(),
        element: <VClass />,
      },
      {
        path: ROUTES.CLASS_EDIT(':id'),
        element: <VClass />,
        children: [
          {
            path: ROUTES.CLASS_SUBJECTS(':id'),
            element: <VClassSubject />,
          },
          {
            path: ROUTES.CLASS_STUDENTS(':id'),
            element: <VClassStudents />,
          },
        ],
      },
      {
        path: ROUTES.CLASS_STUDENTS_ADD(':id'),
        element: <VStudent />,
      },
      {
        path: ROUTES.CLASS_STUDENTS_EDIT(':id', ':studentId'),
        element: <VStudent />,
      },
      {
        path: ROUTES.TEACHERS_SHOW(),
        element: <VTeachersShow />,
      },
      {
        path: ROUTES.TEACHERS_EDIT(':id'),
        element: <VTeacher />,
      },
      {
        path: ROUTES.TEACHERS_ADD(),
        element: <VTeacher />,
      },
      {
        path: ROUTES.SUBJECTS_SHOW(),
        element: <VSubjects />,
      },
      {
        path: ROUTES.SUBJECT_EDIT(':id'),
        element: <VSubject />,
      },
      {
        path: ROUTES.SUBJECT_ADD(),
        element: <VSubject />,
      },
    ],
  },
  {
    path: ROUTES.TEACHER_BASE(),
    element: <TeacherLayout />,
    children: [
      {
        path: ROUTES.TEACHER_MAIN(),
        element: <VTeacherMain />,
      },
      {
        path: ROUTES.TEACHER_SUBJECTS(),
        element: <VTeachersSubjects />,
      },
      {
        path: ROUTES.TEACHER_SUBJECTS_GRADES(':id'),
        element: <VTeacherGrades />,
      },
      {
        path: ROUTES.TEACHER_SUBJECTS_FREQUENCIES(':id'),
        element: <VTeacherAttendance />,
      },
      {
        path: ROUTES.TEACHER_NOTICE(),
        element: <VTeacherNotice />,
      },
    ],
  },
  {
    path: ROUTES.STUDENT_BASE(),
    element: <StudentLayout />,
    children: [
      {
        path: ROUTES.STUDENT_MAIN(),
        element: <VStudTimeTable />,
      },
      {
        path: ROUTES.STUDENT_SUBJECTS(),
        element: <VStudSubjects />,
      },
      {
        path: ROUTES.STUDENT_NOTIFICATONS(),
        element: <VStudNotification />,
      },
    ],
  },
  {
    path: ROUTES.PARENT_BASE(),
    element: <ParentLayout />,
    children: [
      {
        path: ROUTES.PARENT_MAIN(),
        element: <VStudTimeTable />,
      },
      {
        path: ROUTES.PARENT_SUBJECTS(),
        element: <VStudSubjects />,
      },
      {
        path: ROUTES.PARENT_NOTIFICATONS(),
        element: <VStudNotification />,
      },
    ],
  },
]);

export default router;
