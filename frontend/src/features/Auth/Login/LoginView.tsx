import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { ButtonF, InputGroupText } from '@/components/forms';

interface LoginViewProps {
  login: string;
  password: string;
  isLoading: boolean;
  handleLoginChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}

const LoginView = ({
  login,
  password,
  isLoading,
  handleLoginChange,
  handlePasswordChange,
  handleLogin,
}: LoginViewProps) => {
  return (
    <>
      <HeaderText text={'Zaloguj się'} />
      <Container fluid className="mt-3">
        <Row className="justify-content-center">
          <Col xs sm={7} md={5}>
            <InputGroupText
              type={'text'}
              key={'login'}
              name={'login'}
              label={'login'}
              placeholder={'Podaj login'}
              value={login}
              setValue={handleLoginChange}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs sm={7} md={5}>
            <InputGroupText
              type={'password'}
              key={'password'}
              name={'password'}
              label={'Hasło'}
              placeholder={'Podaj hasło'}
              value={password}
              setValue={handlePasswordChange}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <ButtonF
              text={'Zaloguj'}
              variant={'primary'}
              onClick={() => handleLogin()}
              isLoading={isLoading}
              size={'sm'}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginView;
