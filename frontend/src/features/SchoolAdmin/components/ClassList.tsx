import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useDeleteClassMutation } from '@/store/api/classSlice.ts';
import { SpinnerComponent } from '@/components/ui';
import { EDIT_CLASS } from '@/config.ts';
import ClassDto from '@/model/ClassDto.ts';

interface ClassListProps {
  item: ClassDto;
}

const ClassList = ({ item }: ClassListProps) => {
  const navigate = useNavigate();
  const [deleteClass, { isLoading }] = useDeleteClassMutation();

  const handleDelete = async () => {
    const confirm = window.confirm(
      `Czy na pewno chcesz usunąć klasę ${item.name}`,
    );
    if (!confirm) return;
    await deleteClass(Number.parseInt(item.id));
  };

  return (
    <tr key={'class' + item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.teacher.login}</td>
      <td>
        <PencilSquare onClick={() => navigate(EDIT_CLASS + item.id)} />
      </td>
      <td onClick={handleDelete}>
        {isLoading ? <SpinnerComponent /> : <TrashFill />}
      </td>
    </tr>
  );
};

export default ClassList;
