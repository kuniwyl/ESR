import { ChangeEvent, useCallback, useEffect, useState } from 'react';

interface IUseTextInput {
  initialValue: string;

  onKeyPress?: () => void;
  required: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}

const useTextInput = (props: IUseTextInput) => {
  const [value, setValue] = useState(props.initialValue);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setValue(props.initialValue);
  }, [props.initialValue]);

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      props.onKeyPress && props.onKeyPress();
    }
  };

  const isValid = (valueToCheck?: string) => {
    const valueCheck =
      valueToCheck || valueToCheck === '' ? valueToCheck : value;

    console.log(valueCheck);

    if (
      props.minLength &&
      props.required &&
      valueCheck.length < props.minLength
    ) {
      setError(`Minimalna długość to ${props.minLength}`);
      return false;
    }

    if (
      props.maxLength &&
      props.required &&
      valueCheck.length > props.maxLength
    ) {
      setError(`Maksymalna długość to ${props.maxLength}`);
      return false;
    }

    if (props.pattern && props.required && !props.pattern.test(valueCheck)) {
      setError('Niepoprawny format');
      return false;
    }

    if (props.required && valueCheck.length === 0) {
      setError('To pole jest wymagane');
      return false;
    }

    return true;
  };

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (isValid(event.target.value)) {
        setError('');
      }

      setValue(event.target.value);
    },
    [props.maxLength, props.minLength, props.pattern],
  );

  return { value, error, onChange, setValue, isValid, onKeyPress, setError };
};

export default useTextInput;
