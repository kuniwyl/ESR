import { useContext, useEffect, useState } from 'react';
import useGetCssByClassAndSemester from '@/logic/hooks/css/useGetCssByClassAndSemester.ts';
import { semesterContext } from '@/context/semesterChoose.tsx';
import useGetSubjects from '@/logic/hooks/subjects/useGetSubjects.ts';
import useSelectInput from '@/components/forms/SelectInput/useSelectInput.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import regex from '@/configuration/regex.ts';
import useCreateCss from '@/logic/hooks/css/useCreateCss.ts';
import Status from '@/domain/dtos/Status.ts';
import useDeleteCss from '@/logic/hooks/css/useDeleteCss.ts';
import useEditCss from '@/logic/hooks/css/useEditCss.ts';
import CTimeTableTime from '@/features/timetable/CTimeTable.tsx';
import useGetCssInstanceBySemesterAndClass from '@/logic/hooks/cssInstance/useGetCssInstanceBySemesterAndClass.ts';
import useCreateCssInstance from '@/logic/hooks/cssInstance/useCreateCssInstance.ts';
import { TimeTableCell } from '@/features/timetable/TimeTable.tsx';
import Days from '@/domain/Days.ts';
import useDeleteCssInstance from '@/logic/hooks/cssInstance/useDeleteCssInstance.ts';
import useGetCssInstancesBySemesterAndTeacher from '@/logic/hooks/cssInstance/useGetCssInstancesBySemesterAndTeacher.ts';
import useGetClass from '@/logic/hooks/classes/useGetClass.ts';

const CClassSubjects = (id: number) => {
  const semester = useContext(semesterContext);
  const getClass = useGetClass(id);
  const css = useGetCssByClassAndSemester(id ?? 0, semester.semester?.id ?? 0);
  const addCss = useCreateCss();
  const deleteCss = useDeleteCss();
  const updateCss = useEditCss();

  useEffect(() => {
    if (!semester.semester?.id) {
      semester.getSemester();
    }
  }, [semester.semester?.id]);

  // Add css
  const [showInput, setShowInput] = useState(false);
  const handleShowInput = () => {
    setShowInput(!showInput);
    setEditedCssId(0);
  };

  const subjects = useGetSubjects();
  const subjectSelect = useSelectInput();
  useEffect(() => {
    if (subjects.getSubjects.data?.data) {
      subjectSelect.setOptionsList(subjects.getSubjectsNamesList ?? []);
    }
  }, [subjects.getSubjects.data?.data]);

  const count = useTextInput({
    initialValue: '',
    required: true,
    maxLength: 2,
    minLength: 1,
    pattern: regex.NUMBERS,
  });

  const handleAddCss = () => {
    if (!subjectSelect.getIdFromSelected() || !count.value) {
      return;
    }

    addCss.mutate({
      id: 0,
      created: new Date(),
      updated: new Date(),
      status: Status.Aktywny,
      classId: id ?? 0,
      subjectId: subjectSelect.getIdFromSelected() ?? 0,
      count: parseInt(count.value),
      semesterId: semester.semester?.id ?? 0,
    });
  };

  // Delete css
  const handleDeleteCss = (cssId: number) => {
    deleteCss.mutate(cssId);
  };

  // On edit
  const [editedCssId, setEditedCssId] = useState(0);
  const edit = (cssId: number) => {
    setShowInput(true);
    setEditedCssId(cssId);
    count.setValue(
      css.data?.data.find(css => css.id === cssId)?.count.toString() ?? '',
    );
    subjectSelect.setSelected(
      css.data?.data.find(css => css.id === cssId)?.subjectId ?? 0,
    );
  };

  const handleUpdateCss = () => {
    if (!subjectSelect.getIdFromSelected() || !count.value) {
      return;
    }

    updateCss.mutate({
      id: editedCssId,
      created: new Date(),
      updated: new Date(),
      status: Status.Aktywny,
      classId: id ?? 0,
      subjectId: subjectSelect.getIdFromSelected() ?? 0,
      count: parseInt(count.value),
      semesterId: semester.semester?.id ?? 0,
    });
  };

  // TimeTable
  const [activeCss, setActiveCss] = useState(0);
  const activeCssObject = css.data?.data.find(css => css.id === activeCss);
  const selectActiveCss = (cssId: number) => {
    setActiveCss(cssId);
  };

  const cssInstances = useGetCssInstanceBySemesterAndClass(
    semester.semester?.id.toString() ?? '0',
    id.toString() ?? 0,
  );
  const teacherCssInstances = useGetCssInstancesBySemesterAndTeacher(
    semester.semester?.id.toString() ?? '0',
    activeCssObject?.teacherId?.toString() ?? '0',
  );
  const addCssInstance = useCreateCssInstance();
  const deleteCssInstance = useDeleteCssInstance();

  const createInstance = (day: Days, cell: TimeTableCell) => {
    if (activeCss === 0) return;
    addCssInstance.mutate({
      id: 0,
      created: new Date(),
      updated: new Date(),
      status: Status.Aktywny,
      classSubjectSemesterId: activeCss,
      day: day,
      slot: cell.idx,
    });
  };

  const deleteInstance = (instanceId: number) => {
    deleteCssInstance.mutate(instanceId.toString());
  };

  const timetable = CTimeTableTime(
    cssInstances.data?.data ?? [],
    teacherCssInstances.data?.data ?? [],
    getClass.data?.data.nameId ?? '',
    createInstance,
    deleteInstance,
  );

  const decideMethod = () => {
    if (editedCssId === 0) {
      handleAddCss();
    } else {
      handleUpdateCss();
    }
  };

  return {
    css,

    count,
    subjectSelect,
    showInput,
    handleShowInput,
    decideMethod,
    handleDeleteCss,

    edit,
    timetable,

    activeCss,
    selectActiveCss,
  };
};

export default CClassSubjects;
