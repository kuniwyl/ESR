import { Toast } from 'react-bootstrap';
import { ButtonF, InputGroupText } from '@/components/forms';
import { ChangeEvent, useEffect } from 'react';
import '../styles/addUser.scss';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

interface AddUserProps {
  type: string;
  name: string;
  user: RegisterDto;
  setUser: (user: RegisterDto) => void;
  show: boolean;
  setShow: (show: boolean) => void;
  handleAdd: () => void;
  isLoading: boolean;
  error?: string | null;
  additionalForm?: JSX.Element;
}

const AddUser = ({
  type,
  name,
  user,
  setUser,
  show,
  setShow,
  handleAdd,
  isLoading,
  error,
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
    <Toast
      className={`addUser ${type}`}
      show={show}
      onClose={() => setShow(false)}
    >
      <Toast.Header>
        {type} {name}
      </Toast.Header>
      <Toast.Body>
        <InputGroupText
          type={'text'}
          name={'login'}
          label={'login'}
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
          text={type}
          isLoading={isLoading}
          onClick={() => handleAdd()}
          size={'sm'}
          error={error}
        />
      </Toast.Body>
    </Toast>
  );
};

export default AddUser;
