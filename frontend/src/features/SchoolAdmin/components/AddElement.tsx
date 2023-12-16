import { ChangeEvent, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import { ButtonF, InputGroupText, InputUser } from '@/components/forms';
import SubjectDto from '@/domain/dtos/SubjectDto.ts';

interface AddElementProps {
  type: string;
  name: string;
  element: SubjectDto;
  setElement: (element: SubjectDto) => void;
  dataSetList: Array<string>;
  setSelected: (e: ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  setShow: (show: boolean) => void;
  handleAdd: () => void;
  isLoading: boolean;
  error?: string | null;
  additionalForm?: JSX.Element;
}

const AddElement = ({
  type,
  name,
  element,
  setElement,
  dataSetList,
  setSelected,
  show,
  setShow,
  handleAdd,
  isLoading,
  error,
  additionalForm,
}: AddElementProps) => {
  const setUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setElement({ ...element, [name]: value });
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
          name={'name'}
          label={'Nazwa'}
          placeholder={'Wprowadź nazwę'}
          value={element.name}
          setValue={setUserData}
        />
        <InputGroupText
          type={'text'}
          name={'description'}
          label={'Opis'}
          placeholder={'Wprowadź opis'}
          value={element.description}
          setValue={setUserData}
        />
        <InputUser
          datalist={dataSetList}
          dataListName={'nauczyciele'}
          setData={setSelected}
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

export default AddElement;
