import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import CLogin from '@/features/auth/login/CLogin.ts';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';

const VLogin = () => {
  const controller = CLogin();

  return (
    <>
      <HeaderText text={'Zaloguj się'} />
      <Container fluid className="mt-3">
        <Row className="justify-content-center">
          <Col xs sm={7} md={4}>
            <TextInput
              value={controller.login.value}
              placeholder={'Login'}
              label={'Login'}
              error={controller.login.error}
              onChange={controller.login.onChange}
              onKeyDown={controller.login.onKeyPress}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs sm={7} md={4}>
            <TextInput
              type={'password'}
              value={controller.password.value}
              placeholder={'Hasło'}
              label={'Hasło'}
              error={controller.password.error}
              onChange={controller.password.onChange}
              onKeyDown={controller.password.onKeyPress}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <button
              className="btn btn-primary"
              onClick={controller.handleLogin}
            >
              Zaloguj się
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VLogin;
