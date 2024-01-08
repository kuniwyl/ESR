import CRefreshToken from '@/features/auth/refreshToken/CRefreshToken.ts';
import { Button } from 'react-bootstrap';

const SessionRefresh = () => {
  const controller = CRefreshToken();

  return (
    <Button className="btn btn-dark" onClick={controller.refresh}>
      Pozostało: {controller.showTimeLeft()}
    </Button>
  );
};

export default SessionRefresh;
