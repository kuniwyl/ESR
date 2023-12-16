import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {
  LOGIN,
  SHOW_CLASSES,
  SHOW_PARENTS,
  SHOW_SCHOOLS,
  SHOW_STUDENTS,
  SHOW_SUBJECTS,
  SHOW_TEACHERS,
} from '@/configuration/config.ts';
import SystemAdminRequired from '@/features/systemAdmin/components/SystemAdminRequired.ts';

import './navigation.scss';
import SchoolAdminRequired from '@/features/schoolAdmin/components/SchoolAdminRequired.ts';
import { ButtonF } from '@/components/forms';
import { SessionRefresh } from '@/components/ui';
import { useAuthContext } from '@/context/auth';

const Navigation = () => {
  const { isAuth, logout } = useAuthContext();
  const navigation = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ESR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navElements">
            <SystemAdminRequired>
              <>
                <Link className={'nav-link me-2'} to={SHOW_SCHOOLS}>
                  Szkoły
                </Link>
              </>
            </SystemAdminRequired>

            <SchoolAdminRequired>
              <>
                <Link className={'nav-link me-2'} to={SHOW_CLASSES}>
                  Klasy
                </Link>
                <Link className={'nav-link me-2'} to={SHOW_SUBJECTS}>
                  Przedmioty
                </Link>
                <Link className={'nav-link me-2'} to={SHOW_STUDENTS}>
                  Uczniowie
                </Link>
                <Link className={'nav-link me-2'} to={SHOW_TEACHERS}>
                  Nauczyciele
                </Link>
                <Link className={'nav-link me-2'} to={SHOW_PARENTS}>
                  Rodzice
                </Link>
              </>
            </SchoolAdminRequired>

            {!isAuth ? (
              <Link className={'nav-link'} to={LOGIN}>
                Zaloguj się
              </Link>
            ) : (
              <>
                <SessionRefresh />
                <ButtonF
                  text={'Wyloguj się'}
                  variant={'dark'}
                  isLoading={false}
                  onClick={() => {
                    logout();
                    navigation(LOGIN);
                  }}
                  size={'sm'}
                />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
