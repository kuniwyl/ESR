import { useState } from 'react';

export enum InfoType {
  SUCCESS = 'success',
  ERROR = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

const CInfo = () => {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState('Testowy nagłówek');
  const [message, setMessage] = useState(
    'Lorem ipsum dolor sit amet, consl aliquet nunc, nec aliquam nisl nunc eget nisl. Sed vitae nisl eget nisl aliquam aliquam.',
  );
  const [type, setType] = useState<InfoType>(InfoType.INFO);

  const showMessage = (heading: string, message: string, type: InfoType) => {
    setMessage(message);
    setHeading(heading);
    setType(type);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const hideMessage = () => {
    setShow(false);
  };

  return {
    show,
    heading,
    message,
    type,
    hideMessage,
    showMessage,
  };
};

export type CInfoType = ReturnType<typeof CInfo>;
export default CInfo;
