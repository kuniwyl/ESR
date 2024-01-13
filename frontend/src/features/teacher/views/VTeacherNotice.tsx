import { HeaderText } from '@/components/ui';
import Container from 'react-bootstrap/Container';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import TextAreaInput from '@/components/forms/TextAreaInput/TextAreaInput.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import DateSelector from '@/components/forms/htmls/DateSelector.tsx';
import SelectorInput from '@/components/forms/SelectInput/SelectorInput.tsx';
import { Table } from 'react-bootstrap';
import CTeacherNotice from '@/features/teacher/controller/CTeacherNotice.ts';
import SelectInput from '@/components/forms/SelectInput/SelectorInput.tsx';
import Form from 'react-bootstrap/Form';

const VTeacherNotice = () => {
  const controller = CTeacherNotice();

  if (controller.notices.isLoading) {
    return <></>;
  }

  return (
    <>
      <HeaderText text={'Powiadomienia'} />
      <Container>
        <ButtonEvent text={'Powrót'} event={controller.goBack} />
        <hr />
        {controller.showNoticePanel ? (
          <>
            <FormTitle>Powiadomienie</FormTitle>
            <InputContainer>
              <TextInput
                value={controller.title.value}
                label={'Nazwa ogłoczenia'}
                error={controller.title.error}
                onChange={controller.title.onChange}
              />
              <DateSelector
                label={'Wybierz dzień'}
                value={controller.date.date}
                onChange={controller.date.handleDateChange}
                error={controller.date.error}
              />
              <SelectorInput
                options={controller.slots.options.map(x => x.option)}
                value={controller.slots.selectedOption}
                label={'Wybierz przedział'}
                onChange={controller.slots.handleSelect}
              />
            </InputContainer>
            <TextAreaInput
              value={controller.content.value}
              label={'Opis ogłoszenia'}
              error={controller.content.error}
              onChange={controller.content.onChange}
            />

            <Form.Check
              className={'mb-3'}
              checked={controller.showClassPanel}
              onClick={() =>
                controller.setShowClassPanel(!controller.showClassPanel)
              }
              type="checkbox"
              label="Dla konkretnych klas"
            />
            {controller.showClassPanel ? (
              <>
                {controller.notSelectedClasses.options.length > 0 ? (
                  <>
                    <SelectInput
                      className={'mb-1'}
                      options={controller.notSelectedClasses.options.map(
                        x => x.option,
                      )}
                      value={controller.notSelectedClasses.selectedOption}
                      label={'Wybierz klasy'}
                      onChange={controller.notSelectedClasses.handleSelect}
                    />
                    <ButtonEvent
                      className="m-1"
                      text={'Dodaj klasę'}
                      event={controller.selectClass}
                    />
                  </>
                ) : (
                  <></>
                )}
                <ul>
                  {controller.selectedClasses.map(x => (
                    <li>
                      {x.nameId + ' ' + x.name + ' '}
                      <ButtonEvent
                        text={'Usuń'}
                        event={() => controller.deleteSelectedClass(x.id)}
                      />
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <></>
            )}

            <ButtonEvent text={'Anuluj'} event={controller.cancelNotice} />
            <ButtonEvent text={'Zapisz'} event={controller.saveNotice} />
          </>
        ) : (
          <>
            <ButtonEvent text={'Dodaj'} event={controller.addNotice} />
          </>
        )}
        <hr />
        <Table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Data</th>
              <th>Przedział</th>
              <th>Opis</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {controller.notices.data?.data.map(notice => (
              <tr key={notice.id}>
                <td>{notice.title}</td>
                <td>{notice.date}</td>
                <td>
                  {controller.slots.options.length > 0 &&
                    controller.slots.options[notice.slot].option}
                </td>
                <td>{notice.content.substring(0, 40)}</td>
                <td>
                  <ButtonEvent
                    text={'Edytuj'}
                    event={() => controller.editNotice(notice)}
                  />
                  <ButtonEvent
                    text={'Usuń'}
                    event={() => controller.deleteNotice(notice.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default VTeacherNotice;
