import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

const useGetCssFromUser = () => {
  const cssRepository = repositoryContext.css;
  const dispatchError = useErrorDispatcher();
  const getCss = useQuery({
    queryKey: 'css',
    queryFn: () => cssRepository.getCssFromUser(),
    onError: e => {
      dispatchError.dispatchError(e as AxiosError);
    },
  });

  return getCss;
};

export default useGetCssFromUser;
