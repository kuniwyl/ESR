import GradeDto from '@/domain/dtos/GradeDto.ts';
import useGetGradeByCss from '@/logic/hooks/grade/useGetGradeByCss.ts';
import useGetStudents from '@/logic/hooks/students/useGetStudents.ts';
import useGetCssById from '@/logic/hooks/css/useGetCssById.ts';
import { useEffect, useState } from 'react';
import useCreateGrade from '@/logic/hooks/grade/useCreateGrade.ts';
import usePutGrade from '@/logic/hooks/grade/usePutGrade.ts';
import useDelGrade from '@/logic/hooks/grade/useDelGrade.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import regex from '@/configuration/regex.ts';
import useTextAreaInput from '@/components/forms/TextAreaInput/useTextAreaInput.ts';
import { useNavigate } from 'react-router-dom';
import Status from '@/domain/dtos/Status.ts';
import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';
import CTeacherFinalGrade from '@/features/teacher/controller/CTeacherFinalGrade.ts';

const CTeacherGrades = (id: number) => {
  const navigate = useNavigate();

  const css = useGetCssById(id);
  const students = useGetStudents(css.data?.data.classId || 0);
  const studentsList = students.data?.data;
  const grades = useGetGradeByCss(id);

  const addGrade = useCreateGrade();
  const putGrade = usePutGrade();
  const delGrade = useDelGrade();

  const finalGradeController = CTeacherFinalGrade(id);

  useEffect(() => {
    if (css.data?.data.classId) {
      students.refetch();
    }
  }, [css.data?.data]);

  const createTable = () => {
    if (!grades.data?.data.grades) return;
    const map = new Map<number, GradeDto[]>();
    grades.data.data.grades.forEach(grade => {
      if (map.has(grade.studentId)) {
        const list = map.get(grade.studentId) as GradeDto[];
        list.push(grade);
        map.set(grade.studentId, list!);
      } else {
        map.set(grade.studentId, [grade]);
      }
    });

    students.data?.data.forEach(student => {
      if (!map.has(student.id)) {
        map.set(student.id, []);
      }
    });
    return map;
  };

  const finalGrade = () => {
    if (!grades.data?.data.finalGrades) return;
    console.log(grades.data?.data.finalGrades.length);
    const map = new Map<number, FinalGradeDto>();
    grades.data.data.finalGrades.forEach(grade => {
      if (map.has(grade.studentId)) {
        const list = map.get(grade.studentId) as FinalGradeDto;
        map.set(grade.studentId, list!);
      } else {
        map.set(grade.studentId, grade);
      }
    });

    students.data?.data.forEach(student => {
      if (!map.has(student.id)) {
        map.set(student.id, {} as FinalGradeDto);
      }
    });

    console.log(map);

    return map;
  };

  const [selectedGrade, setSelectedGrade] = useState<GradeDto | null>(null);
  const handleSelectedGrade = (grade: GradeDto) => {
    setSelectedGrade(grade);
    value.setValue(grade.value.toString());
    weight.setValue(grade.weight.toString());
    description.setValue(grade.description);
    setSelectedUser(grade.studentId);
    handleShowPanel();
  };
  const clearForm = () => {
    value.setValue('3');
    weight.setValue('3');
    description.setValue('');
    setSelectedUser(0);
  };
  const [showPanel, setShowPanel] = useState(false);
  const handleHidePanel = () => {
    setShowPanel(false);
    setSelectedGrade(null);
  };
  const handleShowPanel = () => {
    setShowPanel(true);
  };
  const handleShowAddPanel = () => {
    value.setValue('3');
    handleShowPanel();
  };
  const [selectedUser, setSelectedUser] = useState(0);
  const handleSelectedUser = (id: number) => {
    setSelectedUser(id);
  };
  const value = useTextInput({
    initialValue: '1',
    minLength: 1,
    maxLength: 1,
    pattern: regex.NUMBERS,
    required: true,
  });
  const weight = useTextInput({
    initialValue: '1',
    minLength: 1,
    maxLength: 1,
    pattern: regex.NUMBERS,
    required: true,
  });
  const description = useTextAreaInput({
    initialValue: '',
    minLength: 0,
    maxLength: 100,
    required: false,
  });

  const goBack = () => {
    navigate(-1);
  };

  const handleModifyGrade = () => {
    if (selectedGrade) {
      handlePutGrade();
    } else {
      handleAddGrade();
    }
  };

  const handleAddGrade = () => {
    if (
      !value.isValid() ||
      !weight.isValid() ||
      !description.isValid() ||
      !selectedUser
    )
      return;

    addGrade.mutate(
      {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Active,
        value: parseInt(value.value),
        weight: parseInt(weight.value),
        description: description.value,
        classSubjectSemesterId: id,
        studentId: selectedUser,
      },
      {
        onSuccess: () => {
          handleHidePanel();
        },
      },
    );
  };

  const handlePutGrade = () => {
    if (
      !value.isValid() ||
      !weight.isValid() ||
      !description.isValid() ||
      !selectedUser
    )
      return;

    putGrade.mutate(
      {
        id: selectedGrade?.id || 0,
        created: selectedGrade?.created || new Date(),
        updated: new Date(),
        status: Status.Active,
        value: parseInt(value.value),
        weight: parseInt(weight.value),
        description: description.value,
        classSubjectSemesterId: id,
        studentId: selectedUser,
      },
      {
        onSuccess: () => {
          handleHidePanel();
        },
      },
    );
  };

  const handleDelGrade = () => {
    delGrade.mutate(selectedGrade?.id || 0, {
      onSuccess: () => {
        clearForm();
        handleHidePanel();
      },
    });
  };

  return {
    css,
    createTable,
    finalGrade,
    goBack,
    studentsList,
    students,
    grades,
    value,
    weight,
    description,
    showPanel,
    selectedUser,
    selectedGrade,
    handleShowAddPanel,
    handleHidePanel,
    handleShowPanel,
    handleSelectedUser,
    handleAddGrade,
    handleSelectedGrade,
    handlePutGrade,
    handleDelGrade,
    handleModifyGrade,

    finalGradeController,
  };
};

export default CTeacherGrades;
