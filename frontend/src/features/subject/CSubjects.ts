import useGetSubjects from '@/logic/hooks/subjects/useGetSubjects.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import useDeleteSubject from '@/logic/hooks/subjects/useDeleteSubject.ts';

const CSubjects = () => {
  const subjects = useGetSubjects();
  const deleteSubject = useDeleteSubject();

  const navigate = useNavigate();

  const navigateToEditSubject = (subjectId: number) => {
    navigate(ROUTES.SUBJECT_EDIT(subjectId.toString()));
  };

  const navigateToAddSubject = () => {
    navigate(ROUTES.SUBJECT_ADD());
  };

  const handleDeleteSubject = (subjectId: number) => {
    deleteSubject.mutate(subjectId);
  };

  return {
    subjects: subjects.getSubjects,
    navigateToEditSubject,
    navigateToAddSubject,
    handleDeleteSubject,
  };
};

export default CSubjects;
