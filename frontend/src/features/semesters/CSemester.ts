import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import useDateSelector from '@/components/forms/hooks/useDateSelector.ts';
import useTimeSelector from '@/components/forms/hooks/useTimeSelector.ts';
import useCreateSemester from '@/logic/hooks/semester/useCreateSemester.ts';
import { authContext } from '@/context/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import regex from '@/configuration/regex.ts';
import useEditSemester from '@/logic/hooks/semester/useEditSemester.ts';
import useGetSemester from '@/logic/hooks/semester/useGetSemester.ts';
import Status from '@/domain/dtos/Status.ts';

const CSemester = (id: number) => {
  const { authState } = useContext(authContext);
  const navigate = useNavigate();
  const semester = useGetSemester(id);
  const addSemester = useCreateSemester();
  const update = useEditSemester();

  useEffect(() => {
    if (semester.data?.data) {
      console.log(semester.data?.data.lessonStart);
      start.handleDateChange(new Date(semester.data?.data.startDate));
      end.handleDateChange(new Date(semester.data?.data.endDate));
      lessonStart.setTimeFromString(semester.data?.data.lessonStart);
    }
    if (id === 0) {
      start.handleDateChange(new Date());
      end.handleDateChange(new Date());
      lessonStart.setTimeFromString('07:00');
    }
  }, [semester.data?.data, id]);

  const name = useTextInput({
    initialValue: id === 0 ? '' : semester.data?.data.name ?? '',
    pattern: regex.SEMESTER,
    required: true,
  });

  const start = useDateSelector({
    initialDate:
      id !== 0 && semester.data
        ? new Date(semester.data?.data.startDate)
        : new Date(),
  });

  const end = useDateSelector({
    initialDate:
      id !== 0 && semester.data
        ? new Date(semester.data?.data.endDate)
        : new Date(),
  });

  const dailyLessonCount = useTextInput({
    initialValue:
      id === 0 ? '' : semester.data?.data.dailyLessonCount.toString() ?? '',
    minLength: 1,
    maxLength: 2,
    pattern: regex.NUMBERS,
    required: true,
  });

  const lessonDuration = useTextInput({
    initialValue:
      id === 0 ? '' : semester.data?.data.lessonDuration.toString() ?? '',
    minLength: 1,
    maxLength: 2,
    pattern: regex.NUMBERS,
    required: true,
  });

  const breakDuration = useTextInput({
    initialValue:
      id === 0 ? '' : semester.data?.data.breakDuration.toString() ?? '',
    minLength: 1,
    maxLength: 2,
    pattern: regex.NUMBERS,
    required: true,
  });

  const lessonStart = useTimeSelector({
    initialTime: id === 0 ? '' : semester.data?.data.lessonStart ?? '',
  });

  const isValid = () => {
    return (
      name.isValid() &&
      start.date !== undefined &&
      end.date !== undefined &&
      start.date < end.date &&
      dailyLessonCount.isValid() &&
      lessonDuration.isValid() &&
      breakDuration.isValid() &&
      lessonStart.time !== undefined
    );
  };

  const saveSemester = () => {
    if (!isValid()) {
      console.log('invalid');
      return;
    }

    addSemester.mutate(
      {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Aktywny,
        name: name.value,
        startDate: start.date,
        endDate: end.date,
        dailyLessonCount: parseInt(dailyLessonCount.value),
        lessonDuration: parseInt(lessonDuration.value),
        breakDuration: parseInt(breakDuration.value),
        lessonStart: lessonStart.time,
        schoolId: authState.schoolId ?? 0,
      },
      {
        onSuccess: () => {
          navigate(ROUTES.SEMESTERS_SHOW());
        },
      },
    );
  };

  const updateSemester = () => {
    if (!isValid()) return;

    update.mutate(
      {
        id: id,
        created: semester.data?.data.created ?? new Date(),
        updated: new Date(),
        status: Status.Zmieniony,
        name: name.value,
        startDate: start.date,
        endDate: end.date,
        dailyLessonCount: parseInt(dailyLessonCount.value),
        lessonDuration: parseInt(lessonDuration.value),
        breakDuration: parseInt(breakDuration.value),
        lessonStart: lessonStart.time,
        schoolId: authState.schoolId ?? 0,
      },
      {
        onSuccess: () => {
          navigate(ROUTES.SEMESTERS_SHOW());
        },
      },
    );
  };

  return {
    name,
    start,
    end,
    dailyLessonCount,
    lessonDuration,
    breakDuration,
    lessonStart,
    saveSemester,
    updateSemester,
    update,
  };
};

export default CSemester;
