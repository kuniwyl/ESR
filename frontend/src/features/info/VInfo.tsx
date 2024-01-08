import { Alert } from 'react-bootstrap';
import useKeyGeneration from '@/logic/useKeyGeneration.ts';
import './SInfo.scss';
import { useInfo } from '@/features/info/InfoContext.tsx';

const VInfo = () => {
  const controller = useInfo();
  const key = useKeyGeneration();

  return (
    <Alert
      id="alertComp"
      key={key}
      variant={controller.type}
      onClose={controller.hideMessage}
      show={controller.show}
      dismissible
    >
      <Alert.Heading>{controller.heading}</Alert.Heading>
      <p>{controller.message}</p>
    </Alert>
  );
};

export default VInfo;
