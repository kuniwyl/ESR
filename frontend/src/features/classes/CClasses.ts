import useGetClasses from '@/logic/hooks/classes/useGetClasses.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import useDeleteClass from '@/logic/hooks/classes/useDeleteClass.ts';

const CClasses = () => {
  const navigate = useNavigate();
  const classes = useGetClasses();
  const deleteClass = useDeleteClass();

  const navigateToEditClass = (id: number) => {
    navigate(ROUTES.CLASS_EDIT(id.toString()));
  };

  const addClass = () => {
    navigate(ROUTES.CLASS_ADD());
  };

  const deleteClassById = (id: number) => {
    deleteClass.mutate(id);
  };

  return {
    classes,
    addClass,
    deleteClassById,
    navigateToEditClass,
  };
};

export default CClasses;
