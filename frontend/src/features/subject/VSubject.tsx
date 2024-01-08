import { HeaderText } from '@/components/ui';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import SelectorInput from '@/components/forms/SelectInput/SelectorInput.tsx';
import Container from 'react-bootstrap/Container';
import CSubject from '@/features/subject/CSubject.ts';
import { useParams } from 'react-router-dom';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextAreaInput from '@/components/forms/TextAreaInput/TextAreaInput.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VSubject = () => {
  const { id } = useParams<{ id: string }>();
  const controller = CSubject(Number.parseInt(id ?? '0'));

  return (
    <>
      <HeaderText text={'Dodaj przedmiot'} />
      <Container>
        <ButtonEvent text={'Powrót'} event={controller.goBack} />
        <FormTitle>Dane przedmiotu</FormTitle>
        <InputContainer>
          <TextInput
            value={controller.name.value}
            label={'Nazwa przedmiotu'}
            error={controller.name.error}
            onChange={controller.name.onChange}
          />
        </InputContainer>
        <InputContainer>
          <TextAreaInput
            value={controller.description.value}
            label={'Opis przedmiotu'}
            error={controller.description.error}
            onChange={controller.description.onChange}
          />
        </InputContainer>

        <FormTitle>Nauczyciel prowadzący</FormTitle>
        <InputContainer>
          <SelectorInput
            options={controller.teacherList.options.map(x => x.option)}
            value={controller.teacherList.selectedOption}
            label={'Wybierz nauczyciela'}
            onChange={controller.teacherList.handleSelect}
          />
        </InputContainer>

        {!id ? (
          <ButtonEvent text={'Dodaj'} event={controller.handleCreate} />
        ) : (
          <ButtonEvent
            text={'Zapisz'}
            event={controller.handleEdit}
            successText={'Zapisano'}
            success={controller.edit.isSuccess}
            loading={controller.edit.isLoading}
          />
        )}
      </Container>
    </>
  );
};

export default VSubject;
