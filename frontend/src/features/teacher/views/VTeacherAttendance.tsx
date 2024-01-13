import { HeaderText, SpinnerComponent } from '@/components/ui';
import Container from 'react-bootstrap/Container';
import CTeacherAttendance from '@/features/teacher/controller/CTeacherAttendance.ts';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import PresenceSelector from '@/components/ui/PresenceSelector/PresenceSelector.tsx';
import PresenceDto from '@/domain/dtos/PresenceDto.ts';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import TextAreaInput from '@/components/forms/TextAreaInput/TextAreaInput.tsx';

const VTeacherAttendance = () => {
  const { id } = useParams();
  const controller = CTeacherAttendance(Number.parseInt(id as string));

  if (controller.isLoading()) {
    return <SpinnerComponent />;
  }

  return (
    <>
      <HeaderText text={'Frekfencja'} />
      <Container>
        <ButtonEvent text={'Powrót'} event={controller.goBack} />
        <hr />
        {controller.showLessonPanel ? (
          <>
            <FormTitle>Lekcja</FormTitle>
            <InputContainer>
              <TextInput
                value={controller.name.value}
                label={'Skrócona nazwa'}
                error={controller.name.error}
                onChange={controller.name.onChange}
              />
              <TextAreaInput
                value={controller.description.value}
                label={'Temat lekcji'}
                error={controller.description.error}
                onChange={controller.description.onChange}
              />
            </InputContainer>
            <ButtonEvent text={'Anuluj'} event={controller.hideLessonPanel} />
            <ButtonEvent text={'Zapisz'} event={controller.handleLessonSave} />
          </>
        ) : (
          <ButtonEvent
            text={'Dodaj zajęcia'}
            event={controller.handleAddLesson}
          />
        )}
        <hr />
        <Table>
          <thead>
            <tr>
              <th>Uczeń</th>
              {controller.lessonse.data?.data.map(lesson => {
                return (
                  <th onClick={() => controller.handleEditLesson(lesson)}>
                    {lesson.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {controller.students.data?.data.map(student => {
              return (
                <tr>
                  <td>{student.firstName + ' ' + student.lastName}</td>
                  {controller.lessonse.data?.data.map(lesson => {
                    const co = controller.getPresence(lesson.id, student.id);
                    return (
                      <td>
                        <PresenceSelector
                          presence={co ?? ({} as PresenceDto)}
                          onChange={controller.changePresence}
                          lessonId={lesson.id}
                          studentId={student.id}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default VTeacherAttendance;
