import { Table } from 'react-bootstrap';
import Days from '@/domain/Days.ts';
import { CTimeTableTimeType } from '@/features/timetable/CTimeTable.tsx';

export interface TimeTableCell {
  idx: number;
  start: string;
  end: string;
}

export interface TimeTableProps {
  controller: CTimeTableTimeType;
}

const TimeTable = (props: TimeTableProps) => {
  const { lessons, handleCellClick, findSubjectName } = props.controller;

  const map =
    lessons &&
    lessons.map((i, idx) => {
      return (
        <tr key={idx}>
          <td>
            {i.start} - {i.end}
          </td>
          <td
            onClick={e => handleCellClick(e, Days.Poniedziałek, i)}
            onContextMenu={e => handleCellClick(e, Days.Poniedziałek, i)}
          >
            {findSubjectName(
              Days.Poniedziałek,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td
            onClick={e => handleCellClick(e, Days.Wtorek, i)}
            onContextMenu={e => handleCellClick(e, Days.Wtorek, i)}
          >
            {findSubjectName(
              Days.Wtorek,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td
            onClick={e => handleCellClick(e, Days.Środa, i)}
            onContextMenu={e => handleCellClick(e, Days.Środa, i)}
          >
            {findSubjectName(
              Days.Środa,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td
            onClick={e => handleCellClick(e, Days.Czwartek, i)}
            onContextMenu={e => handleCellClick(e, Days.Czwartek, i)}
          >
            {findSubjectName(
              Days.Czwartek,
              lessons.find(x => x.idx === i.idx) ?? i,
            )}
          </td>
          <td
            onClick={e => handleCellClick(e, Days.Piątek, i)}
            onContextMenu={e => handleCellClick(e, Days.Piątek, i)}
          >
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
      <p>* - kolorem czarnym plan klasy</p>
      <p>** - kolorem czerwonym plan nauczyciela wybranego przedmiotu</p>
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

export default TimeTable;
