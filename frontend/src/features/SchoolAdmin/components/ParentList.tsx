import ParentDto from '@/model/ParentDto.ts';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import AddUser from '@/features/SchoolAdmin/components/AddUser.tsx';
import { useState } from 'react';
import RegisterDto from '@/model/RegisterDto.ts';
import {
  useDeleteParentMutation,
  usePutParentMutation,
} from '@/store/api/parentSlice.ts';
import { SpinnerComponent } from '@/components/ui';

interface ParentListProps {
  item: ParentDto;
}

const ParentList = ({ item }: ParentListProps) => {
  const [putParent, { isLoading }] = usePutParentMutation();
  const [deleteParent, { isLoading: isDeleting }] = useDeleteParentMutation();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<RegisterDto>({
    login: item.login,
    password: '',
    firstName: item.firstName,
    lastName: item.lastName,
  } as RegisterDto);

  const handleAdd = async () => {
    await putParent({ id: Number.parseInt(item.id), parent: user });
    setUser({
      login: '',
      password: '',
      firstName: '',
      lastName: '',
    } as RegisterDto);
  };

  const handleDelete = async () => {
    const confirm = window.confirm(
      `Czy na pewno chcesz usunąć rodzica ${item.firstName} ${item.lastName}?`,
    );
    if (!confirm) return;
    await deleteParent(Number.parseInt(item.id));
  };

  return (
    <tr key={'parent' + item.id}>
      <td>{item.id}</td>
      <td>{item.login}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.student.login}</td>
      <td>
        <PencilSquare onClick={() => setShow(!show)} />
        <AddUser
          type={'Edytuj'}
          name={'rodzica'}
          user={user}
          setUser={setUser}
          show={show}
          setShow={setShow}
          handleAdd={handleAdd}
          isLoading={isLoading}
        />
      </td>
      <td onClick={handleDelete}>
        {isDeleting ? <SpinnerComponent /> : <TrashFill />}
      </td>
    </tr>
  );
};

export default ParentList;
