import { ChangeEvent } from 'react';

interface InputUserManager {
  datalist: string[];
  dataListName: string;
  setData: (e: ChangeEvent<HTMLInputElement>) => void;
  initialValue?: string;
}

export default InputUserManager;
