import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  error: string;
  optional?: boolean;
}

const TextInput = (props: TextInputProps) => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className={`input flex-grow-1 p-1 text mb-3 ${props.className}`}>
      <Form.Label htmlFor={randomId}>{props.label}</Form.Label>
      <InputGroup id={randomId}>
        <Form.Control
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
          onKeyDown={props.onKeyDown}
        />
      </InputGroup>
      {props.error && <div className="ms-2 text-danger">{props.error} </div>}
    </div>
  );
};

export default TextInput;
