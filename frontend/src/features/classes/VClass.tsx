import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import SelectorInput from '@/components/forms/SelectInput/SelectorInput.tsx';
import { Link, Outlet, useParams } from 'react-router-dom';
import CClass from '@/features/classes/CClass.ts';
import { ROUTES } from '@/configuration/config.ts';
import TextAreaInput from '@/components/forms/TextAreaInput/TextAreaInput.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VClass = () => {
  const { id } = useParams();
  const controller = CClass(Number.parseInt(id ?? '0'));

  return (
    <>
      <HeaderText text={'Edytuj klasę'} />
      <Container>
        <ButtonEvent text={'Powrót'} event={controller.goBack} />
        <InputContainer>
          <TextInput
            value={controller.nameId.value}
            label={'Number klasy'}
            error={controller.nameId.error}
            onChange={controller.nameId.onChange}
          />
          <TextInput
            value={controller.name.value}
            label={'Typ klasy'}
            error={controller.name.error}
            onChange={controller.name.onChange}
          />
        </InputContainer>

        <TextAreaInput
          value={controller.description.value}
          label={'Opis'}
          error={controller.description.error}
          onChange={controller.description.onChange}
        />

        <FormTitle>Wychowawca</FormTitle>
        <InputContainer>
          <SelectorInput
            options={controller.teachersSelector.options.map(
              item => item.option,
            )}
            value={controller.teachersSelector.selectedOption}
            onChange={controller.teachersSelector.handleSelect}
            label={'Wybierz wychowawcę'}
          />
        </InputContainer>

        {!id ? (
          <ButtonEvent text={'Dodaj klasę'} event={controller.addClass} />
        ) : (
          <ButtonEvent
            text={'Zapisz'}
            event={controller.saveClass}
            loading={controller.updateClass.isLoading}
            success={controller.updateClass.isSuccess}
            successText={'Zapisano'}
          />
        )}
        <hr />
        {id && (
          <div className="d-flex flex-wrap">
            <Link to={ROUTES.CLASS_SUBJECTS(id ?? '0')}>
              <button className="btn btn-dark me-1">Przedmioty</button>
            </Link>
            <Link to={ROUTES.CLASS_STUDENTS(id ?? '0')}>
              <button className="btn btn-dark me-1">Uczniowie</button>
            </Link>
          </div>
        )}
        <Outlet />
      </Container>
    </>
  );
};

export default VClass;
