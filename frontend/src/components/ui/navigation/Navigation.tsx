import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import SchoolAdminRequired from '@/features/layouts/SchoolAdminRequired.ts';
import SystemAdminRequired from '@/features/layouts/SystemAdminRequired.ts';
import { useContext } from 'react';
import { authContext } from '@/context/auth';
import TeacherRequired from '@/features/layouts/TeacherRequired.ts';
import SessionRefresh from '@/features/auth/refreshToken/SessionRefresh.tsx';
import StudentRequired from '@/features/layouts/StudentRequired.ts';
import ParentRequired from '@/features/layouts/ParentRequired.ts';

const Navigation = () => {
  const { authState, logout } = useContext(authContext);
  const navigation = useNavigate();

  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>ESR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navElements">
            <SystemAdminRequired>
              <>
                <Link className={'nav-link me-2'} to={ROUTES.SHOW_SCHOOLS()}>
                  Szkoły
                </Link>
                <Link className={'nav-link me-2'} to={ROUTES.SYSTEM_ADMINS()}>
                  Administratorzy systemu
                </Link>
              </>
            </SystemAdminRequired>

            <SchoolAdminRequired>
              <>
                <Link className={'nav-link me-2'} to={ROUTES.SEMESTERS_SHOW()}>
                  Semestry
                </Link>
                <Link className={'nav-link me-2'} to={ROUTES.CLASSES_SHOW()}>
                  Klasy
                </Link>
                <Link className={'nav-link me-2'} to={ROUTES.TEACHERS_SHOW()}>
                  Nauczyciele
                </Link>
                <Link className={'nav-link me-2'} to={ROUTES.SUBJECTS_SHOW()}>
                  Przedmioty
                </Link>
              </>
            </SchoolAdminRequired>

            <TeacherRequired>
              <>
                <Link className={'nav-link me-2'} to={ROUTES.TEACHER_MAIN()}>
                  Home
                </Link>
                <Link
                  className={'nav-link me-2'}
                  to={ROUTES.TEACHER_SUBJECTS()}
                >
                  Przedmioty
                </Link>
                <Link className={'nav-link me-2'} to={ROUTES.TEACHER_NOTICE()}>
                  Powiadomienia
                </Link>
              </>
            </TeacherRequired>

            <StudentRequired>
              <>
                <Link className={'nav-link me-2'} to={ROUTES.STUDENT_MAIN()}>
                  Plan lekcji
                </Link>
                <Link
                  className={'nav-link me-2'}
                  to={ROUTES.STUDENT_NOTIFICATONS()}
                >
                  Powiadomienia
                </Link>
                <Link
                  className={'nav-link me-2'}
                  to={ROUTES.STUDENT_SUBJECTS()}
                >
                  Oceny
                </Link>
              </>
            </StudentRequired>

            <ParentRequired>
              <>
                <Link className={'nav-link me-2'} to={ROUTES.PARENT_MAIN()}>
                  Plan lekcji
                </Link>
                <Link
                  className={'nav-link me-2'}
                  to={ROUTES.PARENT_NOTIFICATONS()}
                >
                  Powiadomienia
                </Link>
                <Link className={'nav-link me-2'} to={ROUTES.PARENT_SUBJECTS()}>
                  Oceny
                </Link>
              </>
            </ParentRequired>

            {!authState.isAuth ? (
              <>
                <Link className={'nav-link'} to={ROUTES.LOGIN()}>
                  Zaloguj się
                </Link>
              </>
            ) : (
              <>
                <SessionRefresh />
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    logout();
                    navigation(ROUTES.LOGIN());
                  }}
                >
                  Wyloguj się
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
