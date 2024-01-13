import useGetLessonByCssId from '@/logic/hooks/lesson/useGetLessonByCssId.ts';
import useCreateLesson from '@/logic/hooks/lesson/useCreateLesson.ts';
import useEditLesson from '@/logic/hooks/lesson/useEditLesson.ts';
import useGetStudents from '@/logic/hooks/students/useGetStudents.ts';
import useGetCssById from '@/logic/hooks/css/useGetCssById.ts';
import useCreatePresence from '@/logic/hooks/presence/useCreatePresence.ts';
import useEditPresence from '@/logic/hooks/presence/useEditPresence.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import regex from '@/configuration/regex.ts';
import useTextAreaInput from '@/components/forms/TextAreaInput/useTextAreaInput.ts';
import PresenceDto from '@/domain/dtos/PresenceDto.ts';
import Status from '@/domain/dtos/Status.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LessonDto from '@/domain/dtos/LessonDto.ts';

const CTeacherAttendance = (cssId: number) => {
  const navigate = useNavigate();

  const css = useGetCssById(cssId);
  const lessons = useGetLessonByCssId(css.data?.data.id || 0);
  const students = useGetStudents(css.data?.data.classId || 0);
  const createLesson = useCreateLesson();
  const updateLesson = useEditLesson();

  const addLesson = useCreateLesson();
  const editLesson = useEditLesson();

  const addPresence = useCreatePresence();
  const editPresence = useEditPresence();

  const isLoading = () => {
    return css.isLoading || lessons.isLoading || students.isLoading;
  };

  const getPresence = (lessonId: number, studentId: number) => {
    const lesson = lessons.data?.data.find(l => l.id === lessonId);
    const presence = lesson?.presences.find(p => p.studentId === studentId);
    return presence;
  };

  const changePresence = (
    presence: PresenceDto,
    newStatus: number,
    lessonId: number,
    studentId: number,
  ) => {
    console.log(presence);
    if (presence.id) {
      editPresence.mutate({
        id: presence.id,
        created: presence.created,
        updated: new Date(),
        status: Status.Changed,
        presenceStatus: newStatus,
        lessonId: presence.lessonId,
        studentId: presence.studentId,
      });
    } else {
      addPresence.mutate({
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Active,
        presenceStatus: newStatus,
        lessonId: lessonId,
        studentId: studentId,
      });
    }
  };

  const name = useTextInput({
    initialValue: '',
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
    required: true,
  });

  const description = useTextAreaInput({
    initialValue: '',
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
    required: false,
  });

  const [showLessonPanel, setShowLessonPanel] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<LessonDto>();
  const handleAddLesson = () => {
    setShowLessonPanel(true);
    name.setValue('');
    description.setValue('');
    setSelectedLesson({} as LessonDto);
  };

  const handleEditLesson = (lesson: LessonDto) => {
    setShowLessonPanel(true);
    name.setValue(lesson.name);
    description.setValue(lesson.description);
    setSelectedLesson(lesson);
  };

  const hideLessonPanel = () => {
    setShowLessonPanel(false);
  };

  const handleLessonSave = () => {
    if (selectedLesson?.id) {
      updateLesson.mutate(
        {
          id: selectedLesson.id,
          created: selectedLesson.created,
          updated: new Date(),
          status: Status.Changed,
          name: name.value,
          description: description.value,
          classSubjectSemesterId: selectedLesson.classSubjectSemesterId,
          presences: selectedLesson.presences,
        },
        {
          onSuccess: () => {
            hideLessonPanel();
          },
        },
      );
    } else {
      addLesson.mutate(
        {
          id: 0,
          created: new Date(),
          updated: new Date(),
          status: Status.Active,
          name: name.value,
          description: description.value,
          classSubjectSemesterId: css.data?.data.id || 0,
          presences: [],
        },
        {
          onSuccess: () => {
            hideLessonPanel();
          },
        },
      );
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    css,
    lessonse: lessons,
    students,
    createLesson,
    updateLesson,

    getPresence,
    isLoading,
    changePresence,

    name,
    description,
    showLessonPanel,
    handleAddLesson,
    handleEditLesson,
    hideLessonPanel,
    handleLessonSave,

    goBack,
  };
};

export default CTeacherAttendance;
