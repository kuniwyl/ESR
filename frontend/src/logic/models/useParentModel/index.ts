import injectRepository from '@/configuration/context/repositoryContext.ts';
import useGetParents from '@/logic/models/useParentModel/useGetParents.ts';
import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import useGetParent from '@/logic/models/useParentModel/useGetParent.ts';
import useCreateParent from '@/logic/models/useParentModel/useCreateParent.ts';
import useUpdateParent from '@/logic/models/useParentModel/useUpdateParent.ts';
import { useEffect, useState } from 'react';
import ParentDto from '@/domain/dtos/ParentDto.ts';
import useDeleteParent from '@/logic/models/useParentModel/useDeleteParent.ts';

const useParentModel = (id: number) => {
  const parentRepository = injectRepository({
    type: 'parent',
  }) as IParentRepository;

  const getParents = useGetParents(parentRepository);
  const getParent = useGetParent(id, parentRepository);
  const createParent = useCreateParent(parentRepository);
  const updateParent = useUpdateParent(parentRepository);
  const deleteParent = useDeleteParent(parentRepository);

  const parents = getParents.parents;
  const [parent, setParent] = useState({
    id: 0,
    login: '',
    firstName: '',
    lastName: '',
    role: '',
    student: {
      id: 0,
      login: '',
      firstName: '',
      lastName: '',
    },
  } as ParentDto);

  useEffect(() => {
    if (getParent.parent) {
      setParent(getParent.parent);
    }
  }, [getParent.parent]);

  return {
    parents,
    getParents,

    parent,
    setParent,
    getParent,

    createParent,
    updateParent,
    deleteParent,
  };
};

export default useParentModel;
