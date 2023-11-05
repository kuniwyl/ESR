export interface ButtonProps {
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  text: string | JSX.Element;
  isLoading: boolean;
  onClick: () => void;
  size: 'sm' | 'lg';
  isSuccess?: boolean;
  error?: string;
}

export const ButtonType = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  info: 'info',
  light: 'light',
  dark: 'dark',
  link: 'link',
};
