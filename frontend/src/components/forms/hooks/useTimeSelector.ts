import { useState } from 'react';

interface IUseTimeSelector {
  initialTime: string;
}

const useTimeSelector = (props: IUseTimeSelector) => {
  const [time, setTime] = useState(props.initialTime);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const setTimeFromString = (time: string) => {
    setTime(time);
  };

  return {
    time,
    handleTimeChange,
    setTimeFromString,
  };
};

export default useTimeSelector;
