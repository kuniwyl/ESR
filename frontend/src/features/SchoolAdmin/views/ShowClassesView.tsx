import { useSchool } from '@/store/slices/schoolSlice.ts';
import { useState } from 'react';
import TableElement from '@/features/SchoolAdmin/components/TableElement.tsx';
import { usePostClassMutation } from '@/store/api/classSlice.ts';
import ClassList from '@/features/SchoolAdmin/components/ClassList.tsx';
import ElementRegisterDto from '@/model/ElementRegisterDto.ts';

const ShowClassesView = () => {
  const { classes, teachers } = useSchool();
  const [postClass, { isLoading }] = usePostClassMutation();
  const [element, setElement] = useState<ElementRegisterDto>({
    name: '',
    description: '',
    teacher: {
      id: '',
      login: '',
      firstName: '',
      lastName: '',
    },
  });
  const dataList = teachers.map(t => t.login);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const handleAdd = async () => {
    const teacher = teachers.filter(t => t.login === selected)[0];
    if (teacher == null) {
      setError('Nie znaleziono nauczyciela');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }
    element.teacher = teacher;
    await postClass(element);
    setElement({
      name: '',
      description: '',
      teacher: {
        id: '',
        login: '',
        firstName: '',
        lastName: '',
      },
    });
  };

  const thead = (
    <tr>
      <th>#</th>
      <th>Nazwa</th>
      <th>Opis</th>
      <th>Nauczyciel</th>
      <th>Edytuj</th>
      <th>Usuń</th>
    </tr>
  );

  const classesList = classes.map(item => {
    return <ClassList key={item.id} item={item} />;
  });

  return (
    <TableElement
      type={'Dodaj'}
      name={'klasę'}
      thead={thead}
      tbody={classesList}
      element={element}
      setElement={setElement}
      dataList={dataList}
      setSelected={setSelected}
      handleAdd={handleAdd}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default ShowClassesView;
