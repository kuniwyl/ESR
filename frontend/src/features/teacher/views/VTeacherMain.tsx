import Container from 'react-bootstrap/Container';
import { HeaderText } from '@/components/ui';
import CTeacherMain from '@/features/teacher/controller/CTeacherMain.ts';
import VTimeTableUser from '@/features/timetable/VTimeTableUser.tsx';

const VTeacherMain = () => {
  const controller = CTeacherMain();

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

export default VTeacherMain;
