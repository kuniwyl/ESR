import { authContext } from '@/context/auth';
import { useContext, useEffect } from 'react';
import useGetClass from '@/logic/hooks/classes/useGetClass.ts';
import useUpdateClass from '@/logic/hooks/classes/useUpdateClass.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import useGetTeachers from '@/logic/hooks/teachers/useGetTeachers.ts';
import { ROUTES } from '@/configuration/config.ts';
import { useNavigate } from 'react-router-dom';
import useSelectInput from '@/components/forms/SelectInput/useSelectInput.ts';
import useTextAreaInput from '@/components/forms/TextAreaInput/useTextAreaInput.ts';
import useCreateClass from '@/logic/hooks/classes/useCreateClass.ts';
import regex from '@/configuration/regex.ts';
import Status from '@/domain/dtos/Status.ts';

const CClass = (classId: number) => {
  const { authState } = useContext(authContext);
  const navigate = useNavigate();

  const getClass = useGetClass(classId ?? 0);
  const updateClass = useUpdateClass();
  const createClass = useCreateClass();
  const { getTeachers, getTeachersNamesList } = useGetTeachers(
    authState.schoolId ?? 0,
  );

  useEffect(() => {
    if (getClass.data?.data.teacherId) {
      teachersSelector.setSelected(getClass.data?.data.teacherId);
    }

    if (getTeachers.data?.data) {
      teachersSelector.setOptionsList(getTeachersNamesList ?? []);
    }
  }, [getClass.data?.data.teacherId, getTeachers.data?.data]);

  const name = useTextInput({
    initialValue: getClass.data?.data.name ?? '',
    maxLength: 50,
    required: true,
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
  });

  const nameId = useTextInput({
    initialValue: getClass.data?.data.nameId ?? '',
    maxLength: 50,
    required: true,
    pattern: regex.CLASS_NAME_ID,
  });

  const description = useTextAreaInput({
    initialValue: getClass.data?.data.description ?? '',
    maxLength: 100,
    required: true,
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
  });

  const teachersSelector = useSelectInput();

  const goBack = () => {
    navigate(-1);
  };

  const isValid = () => {
    return (
      name.isValid() &&
      nameId.isValid() &&
      description.isValid() &&
      teachersSelector.getIdFromSelected() !== undefined
    );
  };

  const saveClass = () => {
    if (!isValid()) {
      return;
    }

    updateClass.mutate({
      id: classId,
      created: getClass.data?.data.created ?? new Date(),
      updated: new Date(),
      status: Status.Changed,
      name: name.value,
      nameId: nameId.value,
      description: description.value,
      schoolId: authState.schoolId ?? 0,
      teacherId: teachersSelector.getIdFromSelected() ?? 0,
    });
  };

  const addClass = () => {
    if (!isValid()) {
      return;
    }

    createClass.mutate(
      {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Active,
        name: name.value,
        nameId: nameId.value,
        description: description.value,
        schoolId: authState.schoolId ?? 0,
        teacherId: teachersSelector.getIdFromSelected() ?? 0,
      },
      {
        onSuccess: () => {
          navigate(ROUTES.CLASSES_SHOW());
        },
      },
    );
  };

  return {
    name,
    nameId,
    description,
    teachersSelector,

    goBack,

    saveClass,
    updateClass,

    addClass,
  };
};

export default CClass;
