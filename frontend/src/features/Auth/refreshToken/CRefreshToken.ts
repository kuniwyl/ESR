import useRefreshToken from '@/logic/hooks/auth/useRefreshToken.ts';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '@/context/auth';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';

const CRefreshToken = () => {
  const refreshToken = useRefreshToken();
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!auth.authState.isAuth) {
      setTimeLeft(0);
      return;
    }

    if (auth.authState.exp == null) {
      navigate(ROUTES.LOGIN());
      return;
    }

    setTimeLeft(auth.authState.exp - Math.floor(Date.now() / 1000));

    const interval = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [auth.authState.isAuth, auth.authState.refreshToken, auth.authState.exp]);

  const refresh = () => {
    if (!auth.authState.refreshToken) return;

    refreshToken.mutate(auth.authState.refreshToken, {
      onSuccess: data => {
        auth.setAuthData(data.token, data.refreshToken);
      },
    });
  };

  const showTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return { refresh, showTimeLeft };
};

export default CRefreshToken;
