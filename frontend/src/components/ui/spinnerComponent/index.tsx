import { Spinner } from 'react-bootstrap';
import './spinner.scss';
import Container from 'react-bootstrap/Container';

const SpinnerComponent = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Spinner className="spinnerComp" animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
    </Container>
  );
};

export default SpinnerComponent;
