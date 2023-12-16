import { InputProps } from './InputManager.ts';
import { Form, InputGroup } from 'react-bootstrap';
import { ChangeEvent } from 'react';

import './input.scss';

const InputGroupText = ({
  value,
  setValue,
  type = 'text',
  label,
  placeholder,
  name,
}: InputProps) => {
  return (
    <InputGroup className={'inputGroupText mb-3'}>
      <InputGroup.Text id={name + 'text'}>{label}</InputGroup.Text>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        aria-label={name}
        aria-describedby={name}
        value={value}
        onChange={e => setValue(e as ChangeEvent<HTMLInputElement>)}
      />
    </InputGroup>
  );
};

export default InputGroupText;
