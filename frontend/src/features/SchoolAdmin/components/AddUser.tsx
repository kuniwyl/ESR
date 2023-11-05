import { Toast } from 'react-bootstrap';
import { ButtonF, InputGroupText } from '@/components/forms';
import RegisterDto from '@/model/RegisterDto.ts';
import { ChangeEvent, useEffect } from 'react';
import '../styles/addUser.scss';

interface AddUserProps {
  type: string;
  user: RegisterDto;
  setUser: (user: RegisterDto) => void;
  show: boolean;
  setShow: (show: boolean) => void;
  handleAdd: () => void;
  isLoading: boolean;
  additionalForm?: JSX.Element;
}

const AddUser = ({
  type,
  user,
  setUser,
  show,
  setShow,
  handleAdd,
  isLoading,
  additionalForm,
}: AddUserProps) => {
  const setUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    if (show && !isLoading) setShow(false);
  }, [isLoading]);

  return (
    <Toast className="addUser" show={show} onClose={() => setShow(false)}>
      <Toast.Header>Dodaj {type}</Toast.Header>
      <Toast.Body>
        <InputGroupText
          type={'text'}
          name={'login'}
          label={'Login'}
          placeholder={'Wprowadź login'}
          value={user.login}
          setValue={setUserData}
        />
        <InputGroupText
          type={'password'}
          name={'password'}
          label={'Hasło'}
          placeholder={'Wprowadź hasło'}
          value={user.password}
          setValue={setUserData}
        />
        <InputGroupText
          type={'text'}
          name={'firstName'}
          label={'Imię'}
          placeholder={'Wprowadź imię'}
          value={user.firstName}
          setValue={setUserData}
        />
        <InputGroupText
          type={'text'}
          name={'lastName'}
          label={'Nazwisko'}
          placeholder={'Wprowadź nazwisko'}
          value={user.lastName}
          setValue={setUserData}
        />
        {additionalForm}
        <ButtonF
          variant={'dark'}
          text={'Dodaj'}
          isLoading={isLoading}
          onClick={() => handleAdd()}
          size={'sm'}
        />
      </Toast.Body>
    </Toast>
  );
};

export default AddUser;
