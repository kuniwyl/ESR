import repositoryContext from '@/logic/repositories/repositoryContext.ts';
import useErrorDispatcher from '@/logic/hooks/errors/ErrorDispatcher.ts';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

const useGetCssInstancesByUser = () => {
  const cssInstanceRepo = repositoryContext.cssInstance;
  const dispatchError = useErrorDispatcher();
  const getCssInstances = useQuery({
    queryKey: 'cssInstances',
    queryFn: () => cssInstanceRepo.getCssByUser(),
    onError: e => {
      dispatchError.dispatchError(e as AxiosError);
    },
  });

  return getCssInstances;
};

export default useGetCssInstancesByUser;
