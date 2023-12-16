import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '@/features/layouts/DefaultLayout.tsx';
import LoginPresenter from '@/features/auth/login/LoginPresenter.ts';
import {
  CREATE_SCHOOL,
  EDIT_SCHOOL,
  SHOW_SCHOOLS,
  SYSTEM_ADMIN,
} from '@/configuration/config.ts';
import SystemAdminLayout from '@/features/systemAdmin/SystemAdminLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPresenter authRepository={authRepository} />,
      },
    ],
  },
  {
    path: SYSTEM_ADMIN,
    element: <SystemAdminLayout />,
    children: [
      {
        path: SHOW_SCHOOLS,
        element: (
          <SchoolsListPresenter systemAdminRepository={systemAdminRepository} />
        ),
      },
      {
        path: CREATE_SCHOOL,
        element: (
          <CreateSchoolPresenter
            systemAdminRepository={systemAdminRepository}
          />
        ),
      },
      {
        path: EDIT_SCHOOL + ':id',
        element: (
          <SchoolEditPresenter systemAdminRepository={systemAdminRepository} />
        ),
      },
    ],
  },
  // {
  //   path: SCHOOL_ADMIN,
  //   element: <SchoolAdminLayout />,
  //   children: [
  //     { path: SHOW_CLASSES, element: <ShowClassesView /> },
  //     { path: EDIT_CLASS + ':id', element: <EditClassView /> },
  //     { path: SHOW_SUBJECTS, element: <ShowSubjectsView /> },
  //     { path: EDIT_SUBJECT + ':id', element: <EditSubjectView /> },
  //     { path: SHOW_STUDENTS, element: <ShowStudentsView /> },
  //     { path: SHOW_TEACHERS, element: <ShowTeachersView /> },
  //     { path: SHOW_PARENTS, element: <ShowParentsView /> },
  //   ],
  // },
]);

export default router;
