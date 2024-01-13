import Days from '@/domain/Days.ts';
import { Table } from 'react-bootstrap';
import { CTimeTableUserType } from '@/features/timetable/CTimeTableUser.ts';
import { returnUseGetWeekByDay } from '@/features/timetable/useGetWeekByDay.ts';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';

interface VTimeTableUserProps {
  controller: CTimeTableUserType;
  weekSelector: {
    week: returnUseGetWeekByDay;
    setWeek: (upOrDown: number) => void;
  };
}

const VTimeTableUser = (props: VTimeTableUserProps) => {
  const { lessons, findSubjectName } = props.controller;

  const map =
    lessons &&
    lessons.map((i, idx) => {
      return (
        <tr key={idx}>
          <td>
            {i.start} - {i.end}
          </td>
          <td>
            {findSubjectName(
              Days.Poniedziałek,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td>
            {findSubjectName(
              Days.Wtorek,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td>
            {findSubjectName(
              Days.Środa,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td>
            {findSubjectName(
              Days.Czwartek,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td>
            {findSubjectName(
              Days.Piątek,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
        </tr>
      );
    });

  const [weekStart, weekEnd] = props.weekSelector.week;
  return (
    <>
      <div
        className={
          'd-flex w-100 justify-content-between align-items-center border-top m-0'
        }
      >
        <ButtonEvent
          text={<ArrowLeft />}
          event={() => props.weekSelector.setWeek(-1)}
        />
        <span>
          {weekStart.toISOString().substring(0, 10)} -{' '}
          {weekEnd.toISOString().substring(0, 10)}
        </span>
        <ButtonEvent
          text={<ArrowRight />}
          event={() => props.weekSelector.setWeek(1)}
        />
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Godzina</th>
            <th>Poniedziałek</th>
            <th>Wtorek</th>
            <th>Środa</th>
            <th>Czwartek</th>
            <th>Piątek</th>
          </tr>
        </thead>
        <tbody>{map}</tbody>
      </Table>
    </>
  );
};

export default VTimeTableUser;
