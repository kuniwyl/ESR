import { useContext, useEffect, useState } from 'react';
import { semesterContext } from '@/context/semesterChoose.tsx';
import useGetNoticeBySemester from '@/logic/hooks/notice/useGetNoticeBySemester.ts';
import { useNavigate } from 'react-router-dom';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import regex from '@/configuration/regex.ts';
import useDateSelector from '@/components/forms/hooks/useDateSelector.ts';
import useSelectInput from '@/components/forms/SelectInput/useSelectInput.ts';
import useLessonseTimes from '@/features/timetable/useLessonseTimes.ts';
import useTextAreaInput from '@/components/forms/TextAreaInput/useTextAreaInput.ts';
import NoticeDto from '@/domain/dtos/NoticeDto.ts';
import useCreateNotice from '@/logic/hooks/notice/useCreateNotice.ts';
import useUpdateNotice from '@/logic/hooks/notice/useUpdateNotice.ts';
import useDeleteNotice from '@/logic/hooks/notice/useDeleteNotice.ts';
import Status from '@/domain/dtos/Status.ts';
import useGetClasses from '@/logic/hooks/classes/useGetClasses.ts';
import ClassDto from '@/domain/dtos/ClassDto.ts';

const CTeacherNotice = () => {
  const navigate = useNavigate();

  const semester = useContext(semesterContext);
  useEffect(() => {
    if (semester.semester === undefined) {
      semester.getSemester();
    }
  }, []);
  const notices = useGetNoticeBySemester(semester.semester?.id || 0);
  const classes = useGetClasses();

  const [showClassPanel, setShowClassPanel] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<ClassDto[]>([]);
  const notSelectedClasses = useSelectInput();
  useEffect(() => {
    if (classes.data?.data === undefined) return;
    notSelectedClasses.setOptionsList(
      classes.data?.data
        .filter(c => !selectedClasses.includes(c))
        .map(c => ({
          id: c.id,
          option: c.name,
        })) || [],
    );
  }, [selectedClasses, classes.data?.data]);

  const selectClass = () => {
    if (notSelectedClasses.getIdFromSelected() === undefined) return;
    setSelectedClasses([
      ...selectedClasses,
      classes.data?.data.find(
        c => c.id === notSelectedClasses.getIdFromSelected(),
      ) as ClassDto,
    ]);
    notSelectedClasses.setSelected(0);
  };
  const deleteSelectedClass = (id: number) => {
    setSelectedClasses(selectedClasses.filter(c => c.id !== id));
  };

  const createNotice = useCreateNotice();
  const updateNotice = useUpdateNotice();
  const deleteNoticeM = useDeleteNotice();

  const goBack = () => {
    navigate(-1);
  };

  const [selectedNotice, setSelectedNotice] = useState<NoticeDto>(
    {} as NoticeDto,
  );
  const [showNoticePanel, setShowNoticePanel] = useState(false);
  const title = useTextInput({
    initialValue: '',
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
    required: true,
  });

  const date = useDateSelector({
    initialDate: new Date(),
  });

  const slots = useSelectInput();
  const slotCreate = useLessonseTimes();
  useEffect(() => {
    console.log(semester.semester);
    if (semester.semester === undefined) return;
    const lessons = slotCreate.lessonsTimes();
    slots.setOptionsList(
      lessons?.map(lesson => ({
        id: lesson.idx,
        option: `${lesson.start} - ${lesson.end}`,
      })) || [],
    );
  }, [semester.semester]);

  const content = useTextAreaInput({
    initialValue: '',
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
    required: true,
  });

  const cancelNotice = () => {
    setShowNoticePanel(false);
  };

  const saveNotice = () => {
    if (selectedNotice.id) {
      updateNotice.mutate(
        {
          id: selectedNotice.id,
          created: selectedNotice.created,
          updated: new Date(),
          status: Status.Changed,
          title: title.value,
          date: date.date.toISOString().substring(0, 10),
          slot: slots.getIdFromSelected() || 0,
          content: content.value,
          semesterId: semester.semester?.id || 0,
          isNotForAll: showClassPanel,
          classNotices: selectedClasses.map(c => {
            return {
              id: 0,
              created: new Date(),
              updated: new Date(),
              status: Status.Active,
              noticeId: selectedNotice.id,
              classId: c.id,
            };
          }),
        },
        {
          onSuccess: () => {
            setShowNoticePanel(false);
          },
        },
      );
    } else {
      createNotice.mutate(
        {
          id: 0,
          created: new Date(),
          updated: new Date(),
          status: Status.Active,
          title: title.value,
          date: date.date.toISOString().substring(0, 10),
          slot: slots.getIdFromSelected() || 0,
          content: content.value,
          semesterId: semester.semester?.id || 0,
          isNotForAll: showClassPanel,
          classNotices: selectedClasses.map(c => {
            return {
              id: 0,
              created: new Date(),
              updated: new Date(),
              status: Status.Active,
              noticeId: 0,
              classId: c.id,
            };
          }),
        },
        {
          onSuccess: () => {
            setShowNoticePanel(false);
          },
        },
      );
    }
  };

  const addNotice = () => {
    setSelectedNotice({} as NoticeDto);
    setShowNoticePanel(true);
    setShowClassPanel(false);
    setSelectedClasses([]);
  };

  const editNotice = (notice: NoticeDto) => {
    setSelectedNotice(notice);
    setShowNoticePanel(true);
    title.setValue(notice.title);
    date.handleDateChange(new Date(notice.date));
    slots.setSelected(notice.slot);
    content.setValue(notice.content);
    setShowClassPanel(notice.isNotForAll);
    setSelectedClasses(
      classes.data?.data.filter(c =>
        notice.classNotices.map(cn => cn.classId).includes(c.id as number),
      ) || [],
    );
  };

  const deleteNotice = (id: number) => {
    deleteNoticeM.mutate(id);
  };

  return {
    notices,
    showNoticePanel,
    title,
    date,
    slots,
    content,
    saveNotice,
    cancelNotice,
    addNotice,
    editNotice,
    deleteNotice,

    selectedClasses,
    selectClass,
    notSelectedClasses,
    deleteSelectedClass,
    showClassPanel,
    setShowClassPanel,

    goBack,
  };
};

export default CTeacherNotice;
