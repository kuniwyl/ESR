import SubjectDto from '@/model/SubjectDto.ts';
import { useDeleteSubjectMutation } from '@/store/api/subjectSlice.ts';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { SpinnerComponent } from '@/components/ui';
import { useNavigate } from 'react-router-dom';
import { EDIT_SUBJECT } from '@/config.ts';

interface SubjectListProps {
  item: SubjectDto;
}

const SubjectList = ({ item }: SubjectListProps) => {
  const navigate = useNavigate();
  const [deleteSubject, { isLoading }] = useDeleteSubjectMutation();

  const handleDelete = () => {
    const confirm = window.confirm('Czy na pewno chcesz usunąć ten przedmiot?');
    if (confirm) {
      deleteSubject(Number.parseInt(item.id));
    }
  };

  return (
    <tr key={'subject' + item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.teacher.login}</td>
      <td>
        <PencilSquare onClick={() => navigate(EDIT_SUBJECT + item.id)} />
      </td>
      <td>
        {isLoading ? <SpinnerComponent /> : <Trash onClick={handleDelete} />}
      </td>
    </tr>
  );
};

export default SubjectList;
