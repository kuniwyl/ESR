import injectRepository from '@/configuration/context/repositoryContext.ts';
import useGetClasses from '@/logic/models/useClassModel/useGetClasses.ts';
import IClassRepository from '@/logic/interfaces/repositoires/IClassRepository.ts';
import useGetClass from '@/logic/models/useClassModel/useGetClass.ts';
import useCreateClass from '@/logic/models/useClassModel/useCreateClass.ts';
import useUpdateClass from '@/logic/models/useClassModel/useUpdateClass.ts';
import useDeleteClass from '@/logic/models/useClassModel/useDeleteClass.ts';
import useGetClassStudents from '@/logic/models/useClassModel/useGetClassStudents.ts';
import useAddStudentClass from '@/logic/models/useClassModel/useAddStudentClass.ts';
import useDeleteStudentClass from '@/logic/models/useClassModel/useDeleteStudentClass.ts';
import { useEffect, useState } from 'react';
import ClassDto from '@/domain/dtos/ClassDto.ts';

const useClassModel = (id: number) => {
  const classRepository = injectRepository({
    type: 'class',
  }) as IClassRepository;

  const getClasses = useGetClasses(classRepository);
  const getClass = useGetClass(id, classRepository);
  const createClass = useCreateClass(classRepository);
  const updateClass = useUpdateClass(classRepository);
  const deleteClass = useDeleteClass(classRepository);

  const getStudents = useGetClassStudents(id, classRepository);
  const createStudent = useAddStudentClass(classRepository);
  const deleteStudent = useDeleteStudentClass(classRepository);

  const classes = getClasses.classes;
  const students = getStudents.classStudents;
  const [classData, setClassData] = useState<ClassDto>({
    id: 0,
    name: '',
    description: '',
    teacher: {
      id: 0,
      login: '',
      firstName: '',
      lastName: '',
    },
  } as ClassDto);

  useEffect(() => {
    if (getClass.classData) {
      setClassData(getClass.classData);
    }
  }, [getClass.classData]);

  return {
    classes,
    getClasses,

    classData,
    setClassData,
    getClass,

    students,
    getStudents,

    createClass,
    updateClass,
    deleteClass,
    createStudent,
    deleteStudent,
  };
};

export default useClassModel;
