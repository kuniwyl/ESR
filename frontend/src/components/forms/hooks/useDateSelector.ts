import { useState } from 'react';

interface UseDateSelectorProps {
  initialDate: Date;
}

const useDateSelector = (props: UseDateSelectorProps) => {
  const [date, setDate] = useState(props.initialDate);
  const [error, setError] = useState('');

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const validate = () => {
    if (date == null) {
      setError('Data nie może być pusta');
      return false;
    }
    return true;
  };

  return {
    date,
    error,
    handleDateChange,
    validate,
  };
};

export default useDateSelector;
