import Container from 'react-bootstrap/Container';
import CSemester from '@/features/semesters/CSemester.ts';
import { HeaderText } from '@/components/ui';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import DateSelector from '@/components/forms/htmls/DateSelector.tsx';
import TimeSelector from '@/components/forms/htmls/TimeSelector.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import { useParams } from 'react-router-dom';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

const VSemester = () => {
  const { id } = useParams();
  const controller = CSemester(id ? parseInt(id) : 0);

  return (
    <>
      <HeaderText text={'Dodaj semestr'} />
      <Container>
        <FormTitle>Dane semestru</FormTitle>
        <InputContainer>
          <TextInput
            value={controller.name.value}
            label={'Lata semestru'}
            error={controller.name.error}
            onChange={controller.name.onChange}
          />
          <DateSelector
            label={'Wybierz początek semestru'}
            value={controller.start.date}
            onChange={controller.start.handleDateChange}
            error={controller.start.error}
          />
          <DateSelector
            label={'Wybierz koniec semestru'}
            value={controller.end.date}
            onChange={controller.end.handleDateChange}
            error={controller.end.error}
          />
        </InputContainer>

        <FormTitle>Parametry semestru</FormTitle>
        <InputContainer>
          <TextInput
            type={'number'}
            value={controller.dailyLessonCount.value}
            label={'Ilość lekcji dziennie'}
            error={controller.dailyLessonCount.error}
            onChange={controller.dailyLessonCount.onChange}
          />
          <TextInput
            type={'number'}
            value={controller.lessonDuration.value}
            label={'Czas trwania lekcji'}
            error={controller.lessonDuration.error}
            onChange={controller.lessonDuration.onChange}
          />
          <TextInput
            type={'number'}
            value={controller.breakDuration.value}
            label={'Czas przerwy'}
            error={controller.breakDuration.error}
            onChange={controller.breakDuration.onChange}
          />
          <TimeSelector
            value={controller.lessonStart.time}
            label={'Godzina rozpoczęcia lekcji'}
            error={''}
            onChange={controller.lessonStart.handleTimeChange}
          />
        </InputContainer>

        {!id ? (
          <ButtonEvent text={'Dodaj'} event={controller.saveSemester} />
        ) : (
          <ButtonEvent
            text={'Zapisz'}
            event={controller.updateSemester}
            successText={'Zapisano'}
            success={controller.update.isSuccess}
            loading={controller.update.isLoading}
          />
        )}
      </Container>
    </>
  );
};

export default VSemester;
