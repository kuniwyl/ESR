import { useContext, useEffect } from 'react';
import { authContext } from '@/context/auth';
import { useNavigate } from 'react-router-dom';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import useGetTeachers from '@/logic/hooks/teachers/useGetTeachers.ts';
import { ROUTES } from '@/configuration/config.ts';
import useGetSubject from '@/logic/hooks/subjects/useGetSubject.ts';
import useEditSubject from '@/logic/hooks/subjects/useEditSubject.ts';
import useSelectInput from '@/components/forms/SelectInput/useSelectInput.ts';
import useCreateSubject from '@/logic/hooks/subjects/useCreateSubject.ts';
import useTextAreaInput from '@/components/forms/TextAreaInput/useTextAreaInput.ts';
import Status from '@/domain/dtos/Status.ts';

const CSubject = (subjectId: number) => {
  const { authState } = useContext(authContext);
  const navigate = useNavigate();

  const subject = useGetSubject(subjectId);
  const edit = useEditSubject();
  const create = useCreateSubject();
  const { getTeachersNamesList, getTeachers } = useGetTeachers(
    authState.schoolId ?? 0,
  );

  useEffect(() => {
    if (getTeachersNamesList && teacherList.options.length === 0) {
      teacherList.setOptionsList(getTeachersNamesList);
    }

    if (subject.data?.data.teacherId && teacherList.options.length > 0) {
      teacherList.setSelected(subject.data?.data.teacherId ?? 0);
    }
  }, [getTeachers.data?.data, subject.data?.data.teacherId]);

  useEffect(() => {
    if (subject.data?.data.teacherId) {
      teacherList.setSelected(subject.data?.data.teacherId ?? 0);
    }
  }, []);

  const name = useTextInput({
    initialValue: subjectId === 0 ? '' : subject.data?.data.name ?? '',
    required: true,
  });

  const description = useTextAreaInput({
    initialValue: subjectId === 0 ? '' : subject.data?.data.description ?? '',
    required: true,
  });

  const teacherList = useSelectInput();

  const isValid = () => {
    return (
      name.isValid() &&
      description.isValid() &&
      teacherList.getIdFromSelected() !== undefined
    );
  };

  const goBack = () => {
    navigate(ROUTES.SUBJECTS_SHOW());
  };

  const handleEdit = () => {
    if (!isValid()) {
      console.log(teacherList.getIdFromSelected());
      console.log('not valid');
      return;
    }

    console.log('valid');
    edit.mutate({
      id: subjectId,
      created: subject.data?.data.created ?? new Date(),
      updated: new Date(),
      status: Status.Changed,
      name: name.value,
      description: description.value,
      teacherId: teacherList.getIdFromSelected() ?? 0,
      schoolId: authState.schoolId ?? 0,
    });
  };

  const handleCreate = () => {
    if (!isValid()) {
      return;
    }

    create.mutate(
      {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Active,
        name: name.value,
        description: description.value,
        teacherId: teacherList.getIdFromSelected() ?? 0,
        schoolId: authState.schoolId ?? 0,
      },
      {
        onSuccess: () => {
          goBack();
        },
      },
    );
  };

  return {
    name,
    description,
    teacherList,
    goBack,
    handleEdit,
    edit,
    handleCreate,
  };
};

export default CSubject;
