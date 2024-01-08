import { useParams } from 'react-router-dom';
import TimeTable from '@/features/timetable/TimeTable.tsx';
import { Table } from 'react-bootstrap';
import CClassSubjects from '@/features/classes/CClassSubjects.ts';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import SelectorInput from '@/components/forms/SelectInput/SelectorInput.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';

const VClassSubject = () => {
  const { id } = useParams();
  const controller = CClassSubjects(Number.parseInt(id ?? '0'));

  return (
    <>
      {controller.showInput ? (
        <>
          <ButtonEvent
            className="mt-2"
            text={'Anuluj'}
            event={controller.handleShowInput}
          />
          <ButtonEvent
            className="mt-2"
            text={'Zapisz'}
            event={controller.decideMethod}
          />
          <InputContainer>
            <SelectorInput
              options={controller.subjectSelect.options.map(x => x.option)}
              value={controller.subjectSelect.selectedOption}
              label={'Wybierz przedmiot'}
              onChange={controller.subjectSelect.handleSelect}
            />
            <TextInput
              label={'Liczba zajęć'}
              type="number"
              value={controller.count.value}
              onChange={controller.count.onChange}
              error={controller.count.error}
              placeholder={'Liczba zajęć'}
            />
          </InputContainer>
        </>
      ) : (
        <ButtonEvent
          className="mt-2"
          text={'Dodaj zajęcia'}
          event={controller.handleShowInput}
        />
      )}

      <Table>
        <thead>
          <tr>
            <th>Przedmiot</th>
            <th>Nauczyciel</th>
            <th>Liczba zajęć</th>
            <th>Pozostało</th>
            <th>Aktywny</th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>
          {controller.css.data?.data.map(css => (
            <tr key={css.id}>
              <td>{css.subjectName}</td>
              <td>{css.teacherName}</td>
              <td>{css.count}</td>
              <td>
                {css.count - (css.classSubjectSemesterInstances?.length ?? 0)}
              </td>
              <td onClick={() => controller.selectActiveCss(css.id)}>
                {controller.activeCss == css.id ? 'akt' : 'nie'}
              </td>
              <td onClick={() => controller.edit(css.id)}>
                <PencilSquare />
              </td>
              <td onClick={() => controller.handleDeleteCss(css.id)}>
                <Trash3Fill />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TimeTable controller={controller.timetable} />
    </>
  );
};

export default VClassSubject;
