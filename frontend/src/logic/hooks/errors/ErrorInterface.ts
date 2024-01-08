import ErrorList from '@/logic/hooks/errors/ErrorList.ts';

interface ErrorInterface {
  Data: boolean;
  Success: boolean;
  StatusCode: number;
  Message: string;
  Exception: ErrorList;
}

export default ErrorInterface;
