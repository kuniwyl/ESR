import { useRefreshTokenMutation } from '@/store/api/authSlice.ts';
import { authSlice, useAuth } from '@/store/slices/authSlice.ts';
import { ButtonF } from '@/components/forms';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const SessionRefresh = () => {
  const [refreshToken, { isLoading }] = useRefreshTokenMutation();
  const auth = useAuth();
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const expires = new Date(auth.exp ?? 0).getTime();
    setTimeLeft((expires * 1000 - currentTime) / 1000);

    const interval = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [auth.exp]);

  const handleRefresh = async () => {
    const res = await refreshToken().unwrap();
    if (res.token) {
      dispatch(
        authSlice.actions.login({
          token: res.token,
          refreshToken: res.refreshToken,
        }),
      );
    }
  };

  const showTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <ButtonF
      variant={'dark'}
      text={'Do końca sesji: ' + showTimeLeft()}
      isLoading={isLoading}
      onClick={() => handleRefresh()}
      size={'sm'}
    />
  );
};

export default SessionRefresh;
