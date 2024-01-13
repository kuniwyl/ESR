import { HeaderText, SpinnerComponent } from '@/components/ui';
import Container from 'react-bootstrap/Container';
import VTimeTableUser from '@/features/timetable/VTimeTableUser.tsx';
import CStudTimeTable from '@/features/student/timetable/CStudTimeTable.ts';

const VStudTimeTable = () => {
  const controller = CStudTimeTable();

  if (controller.css.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <>
      <HeaderText text={'Plan lekcji'} />
      <Container>
        <VTimeTableUser
          controller={controller.timeTable}
          weekSelector={{
            week: controller.weekSelected,
            setWeek: controller.handleWeekChange,
          }}
        />
      </Container>
    </>
  );
};

export default VStudTimeTable;
