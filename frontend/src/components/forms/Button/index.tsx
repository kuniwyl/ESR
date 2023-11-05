import { ButtonProps } from './ButtonManager.ts';
import { Button } from 'react-bootstrap';
import './button.scss';
import { SpinnerComponent } from '@/components/ui';
import { CheckLg } from 'react-bootstrap-icons';

const ButtonF = ({
  text,
  onClick,
  variant,
  isLoading,
  size = 'sm',
  isSuccess = false,
  error = '',
}: ButtonProps) => {
  return (
    <>
      <Button
        className={`buttonComp ${isLoading ? 'loading' : ''}`}
        variant={isSuccess ? 'success' : variant}
        onClick={onClick}
        size={size}
      >
        {isLoading ? <SpinnerComponent /> : isSuccess ? <CheckLg /> : text}
      </Button>
      {error}
    </>
  );
};
export default ButtonF;
