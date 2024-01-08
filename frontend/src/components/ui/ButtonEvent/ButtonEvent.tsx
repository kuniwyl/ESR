import { useEffect, useState } from 'react';

interface ButtonEventProps {
  text: string | JSX.Element;
  event: () => void;
  className?: string;
  loading?: boolean;
  success?: boolean;
  successText?: string;
  disabled?: boolean;
}

const ButtonEvent = (props: ButtonEventProps) => {
  const { event, text, loading, success } = props;
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (success) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } else {
      setShowSuccess(false);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [success]);

  if (loading) {
    return (
      <button className={`btn btn-dark ${props.className}`}>
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </button>
    );
  }

  if (showSuccess) {
    return (
      <button className={`btn btn-success ${props.className}`}>
        {props.successText}
      </button>
    );
  }

  if (showError) {
    return (
      <button className={`btn btn-danger ${props.className}`}>Błąd</button>
    );
  }

  if (props.disabled) {
    return (
      <button disabled className={`btn btn-dark ${props.className}`}>
        {text}
      </button>
    );
  }

  return (
    <button onClick={event} className={`btn btn-dark ${props.className}`}>
      {text}
    </button>
  );
};

export default ButtonEvent;
