import { Toast } from 'react-bootstrap';
import { ChangeEvent, useEffect, useState } from 'react';
import { RegisterData } from '@/model/AuthInterfaces.ts';
import { ButtonF, InputGroupText } from '@/components/forms';
import { usePostSchoolAdminMutation } from '@/store/api/systemAdminSlice.ts';

import '../styles/createNewAdmin.scss';

interface CreateNewAdminProps {
  schoolId: number;
  showToast: boolean;
  setShowToast: (value: boolean) => void;
}

const CreateNewAdmin = ({
  schoolId,
  showToast,
  setShowToast,
}: CreateNewAdminProps) => {
  const [postSchoolAdmin, { isLoading: isPosting }] =
    usePostSchoolAdminMutation();
  const [admin, setAdmin] = useState<RegisterData>({
    login: 'nowy admin',
    password: 'haslo',
    firstName: 'imie',
    lastName: 'nazwisko',
  } as RegisterData);
  const [repeatPassword, setRepeatPassword] = useState<string>(
    'haslo' as string,
  );
  const [errors, setErrors] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setErrors('');
    }, 4000);
  }, [errors]);

  const addAdmin = async () => {
    if (admin.password !== repeatPassword) {
      setErrors('Hasła nie są takie same!');
      return;
    }
    const res = await postSchoolAdmin({
      id: schoolId,
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
          type={'password'}
          name={'password'}
          label={'Hasło'}
          placeholder={'Podaj hasło'}
          value={admin.password}
          setValue={setData}
        />
        <InputGroupText
          type={'password'}
          name={'repeatPassword'}
          label={'Powtórz hasło'}
          placeholder={'Powtórz hasło'}
          value={repeatPassword}
          setValue={e => setRepeatPassword(e.target.value)}
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
          text={'Dodaj'}
          isLoading={isPosting}
          onClick={addAdmin}
          size={'sm'}
          error={errors}
        />
      </Toast.Body>
    </Toast>
  );
};

export default CreateNewAdmin;
