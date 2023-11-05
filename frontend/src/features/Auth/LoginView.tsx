import { Col, Row } from 'react-bootstrap';
import { ButtonF, InputGroupText } from '../../components/forms';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { HeaderText } from '@/components/ui';
import {
  useLoginMutation,
  useRefreshTokenMutation,
} from '@/store/api/authSlice.ts';
import { useDispatch } from 'react-redux';
import {
  authSlice,
  REFRESH_TOKEN_NAMESPACE,
  useAuth,
} from '@/store/slices/authSlice.ts';
import { useNavigate } from 'react-router-dom';
import { SHOW_CLASSES, SHOW_SCHOOLS } from '@/config.ts';
import { UserRoles } from '@/model/UserRoles.ts';

const LoginView = () => {
  const [loginProcess, { isLoading }] = useLoginMutation();
  const [refreshTokenProcess] = useRefreshTokenMutation();
  const [login, setLogin] = useState<string>('string');
  const [password, setPassword] = useState<string>('string');
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      if (auth.isAuth && auth.role === UserRoles.SYSTEM_ADMIN) {
        navigation(SHOW_SCHOOLS);
      } else if (auth.isAuth && auth.role === UserRoles.SCHOOL_ADMIN) {
        navigation(SHOW_CLASSES);
      } else if (localStorage.getItem(REFRESH_TOKEN_NAMESPACE) !== null) {
        const res = await refreshTokenProcess().unwrap();
        if (res.token) {
          dispatch(
            authSlice.actions.login({
              token: res.token,
              refreshToken: res.refreshToken,
            }),
          );
        }
      }
    };

    checkLogin();
  }, [auth.isAuth]);

  const handleLogin = async () => {
    const res = await loginProcess({ login, password }).unwrap();
    if (res.token) {
      dispatch(
        authSlice.actions.login({
          token: res.token,
          refreshToken: res.refreshToken,
        }),
      );
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

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
              label={'Login'}
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
