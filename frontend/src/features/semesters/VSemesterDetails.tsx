import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import { useParams } from 'react-router-dom';
import CSemesterDetalis from '@/features/semesters/CSemesterDetalis.ts';
import DisablesInput from '@/components/forms/htmls/DisablesInput.tsx';

const VSemesterDetails = () => {
  const { id } = useParams<string>();
  const controller = CSemesterDetalis(Number.parseInt(id ?? '0') || 0);

  if (controller.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <HeaderText text={'Dodaj semestr'} />
      <DisablesInput
        label={'Nazwa semestru'}
        value={controller.data?.data.name ?? ''}
      />
      <DisablesInput
        label={'Początek semestur'}
        value={controller.data?.data.startDate.toString().slice(0, 10) ?? ''}
      />
      <DisablesInput
        label={'Koniec semestur'}
        value={controller.data?.data.endDate.toString().slice(0, 10) ?? ''}
      />
      <DisablesInput
        label={'Liczna lekcji'}
        value={controller.data?.data.dailyLessonCount.toString() ?? ''}
      />
      <DisablesInput
        label={'Czas trwania lekcji'}
        value={controller.data?.data.lessonDuration.toString() ?? ''}
      />
      <DisablesInput
        label={'Czas trwania przerwy'}
        value={controller.data?.data.breakDuration.toString() ?? ''}
      />
      <DisablesInput
        label={'Godzina rozpoczęcia zajęć'}
        value={controller.data?.data.lessonStart.toString() ?? ''}
      />
    </Container>
  );
};

export default VSemesterDetails;
