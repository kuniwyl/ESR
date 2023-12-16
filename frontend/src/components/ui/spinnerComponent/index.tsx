import { Spinner } from 'react-bootstrap';
import './spinner.scss';

const SpinnerComponent = () => {
  return (
    <Spinner className="spinnerComp" animation="border" role="status">
      <span className="visually-hidden"></span>
    </Spinner>
  );
};

export default SpinnerComponent;
