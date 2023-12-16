// import { ButtonF } from '@/components/forms';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { useMutation } from 'react-query';
// import { authUseCase } from '@/configuration/context.ts';
// import { AuthSliceState } from '@/store/interfaces.ts';
// import { RootState } from '@/store';

const SessionRefresh = () => {
  // const refreschToken = useMutation({
  //   mutationFn: authUseCase.refreshToken,
  //   onSuccess: data => {
  //     dispatch(
  //       authSlice.actions.login({
  //         token: data.token,
  //         refreshToken: data.refreshToken,
  //       }),
  //     );
  //   },
  // });
  // const auth = useSelector<RootState>(context => context.auth) as AuthSliceState;
  // const dispatch = useDispatch();
  // const [timeLeft, setTimeLeft] = useState<number>(0);
  //
  // // useEffect(() => {
  // //   const currentTime = new Date().getTime();
  // //   const expires = new Date(auth.exp ?? 0).getTime();
  // //   setTimeLeft((expires * 1000 - currentTime) / 1000);
  // //
  // //   const interval = setInterval(() => {
  // //     setTimeLeft(timeLeft => timeLeft - 1);
  // //   }, 1000);
  // //
  // //   return () => clearInterval(interval);
  // // }, [auth.exp]);
  //
  // const handleRefresh = async () => {
  //   refreschToken.mutate(localStorage.getItem(REFRESH_TOKEN_NAMESPACE) ?? '');
  // };
  //
  // const showTimeLeft = () => {
  //   const minutes = Math.floor(timeLeft / 60);
  //   const seconds = Math.floor(timeLeft % 60);
  //   return `${minutes.toString().padStart(2, '0')}:${seconds
  //     .toString()
  //     .padStart(2, '0')}`;
  // };

  return (
    // <ButtonF
    //   variant={'dark'}
    //   text={'Do końca sesji: ' + showTimeLeft()}
    //   isLoading={refreschToken.isLoading}
    //   onClick={() => handleRefresh()}
    //   size={'sm'}
    // />
    <></>
  );
};

export default SessionRefresh;
