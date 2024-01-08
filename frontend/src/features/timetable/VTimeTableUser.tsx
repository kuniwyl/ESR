import Days from '@/domain/Days.ts';
import { Table } from 'react-bootstrap';
import { CTimeTableUserType } from '@/features/timetable/CTimeTableUser.ts';

interface VTimeTableUserProps {
  controller: CTimeTableUserType;
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

  return (
    <>
      <Table className="my-2" striped bordered hover responsive>
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
