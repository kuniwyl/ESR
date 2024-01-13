import { useParams } from 'react-router-dom';
import CTeacherGrades from '@/features/teacher/controller/CTeacherGrades.ts';
import { HeaderText, SpinnerComponent } from '@/components/ui';
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ButtonEvent from '@/components/ui/ButtonEvent/ButtonEvent.tsx';
import { PlusCircle } from 'react-bootstrap-icons';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import TextAreaInput from '@/components/forms/TextAreaInput/TextAreaInput.tsx';
import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import TdGrade from '@/components/ui/TdGrade/TdGrade.tsx';
import TdFinalGrade from '@/components/ui/TdGrade/TdFinalGrade.tsx';

const VTeacherGrades = () => {
  const { id } = useParams();
  const controller = CTeacherGrades(Number.parseInt(id ?? '0'));

  if (
    controller.css.isLoading ||
    controller.grades.isLoading ||
    controller.students.isLoading
  ) {
    return <SpinnerComponent />;
  }

  const selectedUser = controller.students.data?.data.find(
    s => s.id == controller.selectedUser,
  );
  const selectedUserFinalGrade = controller.students.data?.data.find(
    s => s.id == controller.finalGradeController.selectedStudent,
  );

  const finalGrade = controller.finalGrade();
  return (
    <>
      <HeaderText text={'Oceny ' + controller.css.data?.data.className} />
      <Container>
        <ButtonEvent text={'Wróć'} event={controller.goBack} />
        <hr />
        {controller.finalGradeController.showFinalGrade && (
          <>
            <FormTitle>Wprowadź ocenę końcową</FormTitle>
            <InputContainer>
              <TextInput
                value={
                  selectedUserFinalGrade
                    ? selectedUserFinalGrade.firstName +
                      ' ' +
                      selectedUserFinalGrade.lastName
                    : ''
                }
                label={'Wybrany uczeń'}
                error={''}
                onChange={() => {}}
                disabled={true}
              />
              <TextInput
                value={controller.finalGradeController.finalGradeValue.value}
                label={'Wprodadź ocenę'}
                error={controller.finalGradeController.finalGradeValue.error}
                onChange={
                  controller.finalGradeController.finalGradeValue.onChange
                }
              />
            </InputContainer>
            <ButtonEvent
              text={'Anuluj'}
              event={controller.finalGradeController.hideFinalGrade}
            />
            <ButtonEvent
              text={'Zapisz ocenę'}
              event={controller.finalGradeController.handleUpdateCreate}
            />
          </>
        )}

        {controller.showPanel && (
          <>
            <FormTitle>Wprowadź ocenę</FormTitle>
            <InputContainer>
              <TextInput
                value={
                  selectedUser
                    ? selectedUser.firstName + ' ' + selectedUser.lastName
                    : ''
                }
                label={'Wybrany uczeń'}
                error={''}
                onChange={() => {}}
                disabled={true}
              />
              <TextInput
                value={controller.value.value}
                label={'Wprodadź ocenę'}
                error={controller.value.error}
                onChange={controller.value.onChange}
              />
              <TextInput
                value={controller.weight.value}
                label={'Wprowadź wagę'}
                error={controller.weight.error}
                onChange={controller.weight.onChange}
              />
            </InputContainer>
            <InputContainer>
              <TextAreaInput
                value={controller.description.value}
                label={'Opis oceny*'}
                error={controller.description.error}
                onChange={controller.description.onChange}
              />
            </InputContainer>
            <ButtonEvent text={'Anuluj'} event={controller.handleHidePanel} />
            <ButtonEvent
              text={'Zapisz ocenę'}
              event={controller.handleModifyGrade}
            />
            {controller.selectedGrade && (
              <ButtonEvent
                text={'Usuń ocenę'}
                event={controller.handleDelGrade}
              />
            )}
            <hr />
          </>
        )}
        <Table>
          <thead>
            <tr>
              <th>Uczeń</th>
              <th>Oceny</th>
              <th>Dodaj ocenę</th>
              <th>Ocena końcowa</th>
            </tr>
          </thead>
          <tbody>
            {[...(controller.createTable()?.entries() ?? [])].map(entry => {
              const [key, value] = entry;
              const student = controller.studentsList?.find(s => s.id == key);
              return (
                <tr key={key}>
                  <td>
                    {student ? student.firstName + ' ' + student.lastName : ''}
                  </td>
                  <td>
                    <div className="d-flex">
                      {value.map((grade, index) => {
                        return (
                          <TdGrade
                            grade={grade}
                            key={index}
                            onClick={() => {
                              controller.handleSelectedGrade(grade);
                            }}
                          />
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <ButtonEvent
                      text={<PlusCircle />}
                      event={() => {
                        controller.handleSelectedUser(student ? student.id : 0);
                        controller.handleShowAddPanel();
                      }}
                    />
                  </td>
                  <td>
                    {finalGrade?.has(student?.id ?? -1) ? (
                      <TdFinalGrade
                        grade={finalGrade.get(student?.id ?? -1)}
                        onClick={() =>
                          controller.finalGradeController.handleShowUpdateFinalGrade(
                            student?.id ?? -1,
                            finalGrade.get(student?.id ?? -1),
                          )
                        }
                      />
                    ) : (
                      <ButtonEvent
                        text={<PlusCircle />}
                        event={() =>
                          controller.finalGradeController.handleShowCreateFinalGrade(
                            student?.id ?? -1,
                          )
                        }
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default VTeacherGrades;
