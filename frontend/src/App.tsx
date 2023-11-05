import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '@/features/Layouts/DefaultLayout.tsx';
import LoginView from '@/features/Auth/LoginView.tsx';
import SchoolsView from '@/features/SystemAdmin/views/SchoolsView.tsx';
import SystemAdminLayout from '@/features/SystemAdmin/SystemAdminLayout.tsx';
import CreateSchoolView from '@/features/SystemAdmin/views/CreateSchoolView.tsx';
import SchoolEditView from '@/features/SystemAdmin/views/SchoolEditView.tsx';
import {
  CREATE_SCHOOL,
  EDIT_CLASS,
  EDIT_SCHOOL,
  EDIT_SUBJECT,
  SCHOOL_ADMIN,
  SHOW_CLASSES,
  SHOW_PARENTS,
  SHOW_SCHOOLS,
  SHOW_STUDENTS,
  SHOW_SUBJECTS,
  SHOW_TEACHERS,
  SYSTEM_ADMIN,
} from '@/config.ts';
import SchoolAdminLayout from '@/features/SchoolAdmin/SchoolAdminLayout.tsx';
import ShowClassesView from '@/features/SchoolAdmin/views/ShowClassesView.tsx';
import EditClassView from '@/features/SchoolAdmin/views/EditClassView.tsx';
import ShowSubjectsView from '@/features/SchoolAdmin/views/ShowSubjectsView.tsx';
import EditSubjectView from '@/features/SchoolAdmin/views/EditSubjectView.tsx';
import ShowStudentsView from '@/features/SchoolAdmin/views/ShowStudentsView.tsx';
import ShowTeachersView from '@/features/SchoolAdmin/views/ShowTeachersView.tsx';
import ShowParentsView from '@/features/SchoolAdmin/views/ShowParentsView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/login', element: <LoginView /> }],
  },
  {
    path: SYSTEM_ADMIN,
    element: <SystemAdminLayout />,
    children: [
      { path: SHOW_SCHOOLS, element: <SchoolsView /> },
      { path: CREATE_SCHOOL, element: <CreateSchoolView /> },
      {
        path: EDIT_SCHOOL + ':id',
        element: <SchoolEditView />,
      },
    ],
  },
  {
    path: SCHOOL_ADMIN,
    element: <SchoolAdminLayout />,
    children: [
      { path: SHOW_CLASSES, element: <ShowClassesView /> },
      { path: EDIT_CLASS + ':id', element: <EditClassView /> },
      { path: SHOW_SUBJECTS, element: <ShowSubjectsView /> },
      { path: EDIT_SUBJECT + ':id', element: <EditSubjectView /> },
      { path: SHOW_STUDENTS, element: <ShowStudentsView /> },
      { path: SHOW_TEACHERS, element: <ShowTeachersView /> },
      { path: SHOW_PARENTS, element: <ShowParentsView /> },
    ],
  },
]);

export default router;
