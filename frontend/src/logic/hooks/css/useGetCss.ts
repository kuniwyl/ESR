import { useQuery } from 'react-query';
import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { AxiosError } from 'axios';

const useGetCss = (cssId: number) => {
  const cssRepository = repositoryContext.css;
  const dispathError = useErrorDispatcher();
  const getCss = useQuery(
    ['css', cssId],
    () => cssRepository.getCssById(cssId),
    {
      onError: error => {
        dispathError.dispatchError(error as AxiosError);
      },
    },
  );

  return getCss;
};

export default useGetCss;
