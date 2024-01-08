import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { ChangeEvent } from 'react';

interface TimeSelectorProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const TimeSelector = (props: TimeSelectorProps) => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className={'input flex-grow-1 p-1 date mb-3'}>
      <Form.Label htmlFor={randomId}>{props.label}</Form.Label>
      <InputGroup id={randomId}>
        <input
          type={'time'}
          className={'form-control'}
          value={props.value}
          onChange={props.onChange}
        />
      </InputGroup>
      {props.error && <div className="ms-2 text-danger">{props.error} </div>}
    </div>
  );
};

export default TimeSelector;
