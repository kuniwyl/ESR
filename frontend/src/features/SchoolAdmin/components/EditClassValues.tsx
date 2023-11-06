import { ButtonF, InputGroupText, InputUser } from '@/components/forms';
import { useSchool } from '@/store/slices/schoolSlice.ts';
import { usePutClassMutation } from '@/store/api/classSlice.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import ClassDto from '@/model/ClassDto.ts';

const EditClassValues = ({ data }: { data: ClassDto }) => {
  const { teachers } = useSchool();
  const teachersList = teachers.map(t => t.login);
  const [putClass, { isLoading: saving, isSuccess }] = usePutClassMutation();
  const [classData, setClassData] = useState<ClassDto>(data);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(isSuccess);
    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  }, [isSuccess]);

  const setClassDataValue = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setClassData({ ...classData, [name]: value });
  };

  const setClassDataTeacher = (e: ChangeEvent<HTMLInputElement>) => {
    const login = e.target.value;
    const teacher = teachers.filter(t => t.login === login)[0];
    setClassData({ ...classData, teacher: teacher });
  };

  const handleSave = async () => {
    await putClass({ id: Number.parseInt(data.id), classData: classData });
  };

  return (
    <>
      <div className="d-flex align-content-center my-3">
        <InputGroupText
          type={'text'}
          name={'name'}
          label={'Nazwa'}
          placeholder={'Nazwa klasy'}
          value={classData.name}
          setValue={setClassDataValue}
        />
        <InputGroupText
          type={'text'}
          name={'description'}
          label={'Opis'}
          placeholder={'Opis klasy'}
          value={classData.description}
          setValue={setClassDataValue}
        />
        <InputUser
          datalist={teachersList}
          dataListName={'Nauczyciele'}
          setData={setClassDataTeacher}
          initialValue={data.teacher.login}
        />
      </div>
      <ButtonF
        variant={'dark'}
        text={'Zapisz'}
        isLoading={saving}
        onClick={handleSave}
        size={'sm'}
        isSuccess={success}
      />
    </>
  );
};

export default EditClassValues;
