import { useState } from 'react';

enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

interface UseDaySelectorProps {
  slotsMax: number;
}

const useDaySelector = (props: UseDaySelectorProps) => {
  const [dat, setDat] = useState<Days>(1);
  const [slots, setSlots] = useState<number>(0);

  const handleDayChange = (day: Days) => {
    setDat(day);
  };

  const handleSlotsChange = (slots: number) => {
    if (slots > props.slotsMax) {
      setSlots(props.slotsMax);
      return;
    }
    setSlots(slots);
  };

  return { dat, slots, handleDayChange, handleSlotsChange };
};

export default useDaySelector;
