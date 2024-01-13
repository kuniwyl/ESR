import SelectList from '@/logic/hooks/SelectList.ts';
import { useState } from 'react';

const useSelectInput = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [options, setOptions] = useState<SelectList[]>([]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const getIdFromSelected = () => {
    const selected = options.find(option => option.option === selectedOption);
    return selected?.id ?? undefined;
  };

  const setSelected = (id: number) => {
    const option = options.find(option => option.id === id)?.option ?? '';
    setSelectedOption(option);
  };

  const setOptionsList = (optionsList: SelectList[]) => {
    setOptions(optionsList);
    if (optionsList.length > 0) setSelectedOption(optionsList[0].option);
  };

  return {
    selectedOption,
    options,
    handleSelect,
    getIdFromSelected,
    setSelected,
    setOptionsList,
  };
};

export default useSelectInput;
