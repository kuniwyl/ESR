// import { useSchool } from '@/store/slices/schoolSlice.ts';
// import { useState } from 'react';
// import ElementRegisterDto from '@/Domain/Model/ElementRegisterDto.ts';
// import { usePostSubjectMutation } from '@/store/api/subjectSlice.ts';
// import TableElement from '@/features/SchoolAdmin/components/TableElement.tsx';
// import SubjectList from '@/features/SchoolAdmin/components/SubjectList.tsx';

const ShowSubjectsView = () => {
  // const { subjects, teachers } = useSchool();
  // const [postSubject, { isLoading }] = usePostSubjectMutation();
  // const [element, setElement] = useState<ElementRegisterDto>({
  //   name: '',
  //   description: '',
  //   teacher: {
  //     id: '',
  //     login: '',
  //     firstName: '',
  //     lastName: '',
  //   },
  // });
  // const dataList = teachers.map(t => t.login);
  // const [selected, setSelected] = useState<string | null>(null);
  // const [error, setError] = useState<string>('');
  //
  // const handleAdd = async () => {
  //   const teacher = teachers.filter(t => t.login === selected)[0];
  //   if (teacher == null) {
  //     setError('Nie znaleziono nauczyciela');
  //     setTimeout(() => {
  //       setError('');
  //     }, 2000);
  //     return;
  //   }
  //   element.teacher = teacher;
  //   await postSubject(element);
  //   setElement({
  //     name: '',
  //     description: '',
  //     teacher: {
  //       id: '',
  //       login: '',
  //       firstName: '',
  //       lastName: '',
  //     },
  //   });
  // };
  //
  // const thead = (
  //   <tr>
  //     <th>#</th>
  //     <th>Nazwa</th>
  //     <th>Opis</th>
  //     <th>Nauczyciel</th>
  //     <th>Edytuj</th>
  //     <th>Usuń</th>
  //   </tr>
  // );
  //
  // const subjectsList = subjects.map(item => {
  //   return <SubjectList key={item.id} item={item} />;
  // });

  return (
    // <TableElement
    //   type={'Dodaj'}
    //   name={'klasę'}
    //   thead={thead}
    //   tbody={subjectsList}
    //   element={element}
    //   setElement={setElement}
    //   dataList={dataList}
    //   setSelected={setSelected}
    //   handleAdd={handleAdd}
    //   isLoading={isLoading}
    //   error={error}
    // />
    <></>
  );
};

export default ShowSubjectsView;
