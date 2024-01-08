import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

interface DisablesInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

const DisablesInput = (props: DisablesInputProps) => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className={`input text mb-3 ${props.className}`}>
      <Form.Label htmlFor={randomId}>{props.label}</Form.Label>
      <InputGroup id={randomId}>
        <Form.Control
          disabled
          name={props.name}
          value={props.value}
          type={props.type}
        />
      </InputGroup>
    </div>
  );
};

export default DisablesInput;
