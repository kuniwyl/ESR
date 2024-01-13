import useCreateFinalGrade from '@/logic/hooks/finalGrade/useCreateFinalGrade.ts';
import useUpdateFinalGrade from '@/logic/hooks/finalGrade/useUpdateFinalGrade.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import regex from '@/configuration/regex.ts';
import Status from '@/domain/dtos/Status.ts';
import { useState } from 'react';
import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';

const CTeacherFinalGrade = (classStudentSubjectId: number) => {
  const creaeteFinalGrade = useCreateFinalGrade();
  const updateFinalGrade = useUpdateFinalGrade();

  const [showFinalGrade, setShowFinalGrade] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [finalGrade, setFinalGrade] = useState<FinalGradeDto>(
    {} as FinalGradeDto,
  );

  const finalGradeValue = useTextInput({
    initialValue: '',
    pattern: regex.NUMBERS,
    required: true,
  });

  const handleShowCreateFinalGrade = (studentId: number) => {
    setSelectedStudent(studentId);
    setShowFinalGrade(true);
    setFinalGrade({} as FinalGradeDto);
  };

  const handleShowUpdateFinalGrade = (
    studentId: number,
    finalGrade: FinalGradeDto | undefined,
  ) => {
    setSelectedStudent(studentId);
    setShowFinalGrade(true);
    setFinalGrade(finalGrade || ({} as FinalGradeDto));
  };

  const hideFinalGrade = () => {
    setShowFinalGrade(false);
    setSelectedStudent(0);
    setFinalGrade({} as FinalGradeDto);
    finalGradeValue.setValue('');
  };

  const handleUpdateCreate = () => {
    console.log(finalGrade.id);
    if (finalGrade.id) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  const handleCreate = () => {
    creaeteFinalGrade.mutate({
      id: 0,
      created: new Date(),
      updated: new Date(),
      status: Status.Active,
      value: Number.parseInt(finalGradeValue.value),
      classSubjectSemesterId: classStudentSubjectId,
      studentId: selectedStudent,
    });
  };

  const handleUpdate = () => {
    updateFinalGrade.mutate({
      id: finalGrade.id,
      created: finalGrade.created,
      updated: new Date(),
      status: Status.Changed,
      value: Number.parseInt(finalGradeValue.value),
      classSubjectSemesterId: classStudentSubjectId,
      studentId: selectedStudent,
    });
  };

  return {
    showFinalGrade,
    selectedStudent,
    handleShowCreateFinalGrade,
    handleShowUpdateFinalGrade,
    hideFinalGrade,
    finalGradeValue,
    handleUpdateCreate,
  };
};

export default CTeacherFinalGrade;
