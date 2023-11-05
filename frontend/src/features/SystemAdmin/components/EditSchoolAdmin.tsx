import { Toast } from 'react-bootstrap';
import { ChangeEvent, useEffect, useState } from 'react';
import { UserResponse } from '@/model/AuthInterfaces.ts';
import { ButtonF, InputGroupText } from '@/components/forms';
import { usePutSchoolAdminMutation } from '@/store/api/systemAdminSlice.ts';

import '../styles/createNewAdmin.scss';

interface CreateNewAdminProps {
  schoolAdmin: UserResponse;
  schoolId: number;
  showToast: boolean;
  setShowToast: (value: boolean) => void;
}

const EditSchoolAdmin = ({
  schoolAdmin,
  schoolId,
  showToast,
  setShowToast,
}: CreateNewAdminProps) => {
  const [putSchoolAdmin, { isLoading: isPosting }] =
    usePutSchoolAdminMutation();
  const [admin, setAdmin] = useState<UserResponse>(schoolAdmin);
  const [errors, setErrors] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setErrors('');
    }, 4000);
  }, [errors]);

  const saveAdmin = async () => {
    const res = await putSchoolAdmin({
      schoolId: schoolId,
      id: Number.parseInt(schoolAdmin.id),
      schoolAdmin: admin,
    })
      .unwrap()
      .catch(e => {
        setErrors(e.data);
        return false;
      });
    if (res) {
      setShowToast(false);
    }
  };

  const setData = (e: ChangeEvent<HTMLInputElement>) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Toast
      className={'createNewAdmin'}
      show={showToast}
      onClose={() => setShowToast(false)}
    >
      <Toast.Header>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>
        <InputGroupText
          type={'text'}
          name={'login'}
          label={'Login'}
          placeholder={'Podaj login'}
          value={admin.login}
          setValue={setData}
        />
        <InputGroupText
          type={'text'}
          name={'firstName'}
          label={'Imię'}
          placeholder={'Podaj imię'}
          value={admin.firstName}
          setValue={setData}
        />
        <InputGroupText
          type={'text'}
          name={'lastName'}
          label={'Nazwisko'}
          placeholder={'Podaj nazwisko'}
          value={admin.lastName}
          setValue={setData}
        />
        <ButtonF
          variant={'dark'}
          text={'Zapisz'}
          isLoading={isPosting}
          onClick={saveAdmin}
          size={'sm'}
          error={errors}
        />
      </Toast.Body>
    </Toast>
  );
};

export default EditSchoolAdmin;
