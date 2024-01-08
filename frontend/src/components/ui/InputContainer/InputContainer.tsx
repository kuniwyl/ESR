import { JSX } from 'react';

const InputContainer = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {children}
    </div>
  );
};

export default InputContainer;
