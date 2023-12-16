import { ChangeEvent } from 'react';

export interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}
