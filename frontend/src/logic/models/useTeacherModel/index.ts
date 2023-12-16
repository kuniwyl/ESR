import injectRepository from '@/configuration/context/repositoryContext.ts';
import useGetTeachers from '@/logic/models/useTeacherModel/useGetTeachers.ts';
import ITeacherRepository from '@/logic/interfaces/repositoires/ITeacherRepository.ts';
import useGetTeacher from '@/logic/models/useTeacherModel/useGetTeacher.ts';
import useCreateTeacher from '@/logic/models/useTeacherModel/useCreateTeacher.ts';
import useUpdateTeacher from '@/logic/models/useTeacherModel/useUpdateTeacher.ts';
import useDeleteTeacher from '@/logic/models/useTeacherModel/useDeleteTeacher.ts';
import { useEffect, useState } from 'react';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

const useTeacherModel = (id: number) => {
  const teacherRepository = injectRepository({
    type: 'teacher',
  }) as ITeacherRepository;

  const getTeachers = useGetTeachers(teacherRepository);
  const getTeacher = useGetTeacher(id, teacherRepository);
  const createTeacher = useCreateTeacher(teacherRepository);
  const updateTeacher = useUpdateTeacher(teacherRepository);
  const deleteTeacher = useDeleteTeacher(teacherRepository);

  const teachers = getTeachers.teachers;
  const [teacher, setTeacher] = useState<RegisterDto>({
    login: '',
    password: '',
    firstName: '',
    lastName: '',
  } as RegisterDto);

  useEffect(() => {
    if (getTeacher.teacher) {
      setTeacher({
        login: getTeacher.teacher.login,
        password: '',
        firstName: getTeacher.teacher.firstName,
        lastName: getTeacher.teacher.lastName,
      });
    }
  }, [getTeacher.teacher]);

  return {
    teachers,
    getTeachers,

    teacher,
    setTeacher,
    getTeacher,

    createTeacher,
    updateTeacher,
    deleteTeacher,
  };
};

export default useTeacherModel;
