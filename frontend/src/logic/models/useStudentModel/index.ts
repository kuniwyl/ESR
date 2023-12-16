import injectRepository from '@/configuration/context/repositoryContext.ts';
import useGetStudents from '@/logic/models/useStudentModel/useGetStudents.ts';
import useGetStudent from '@/logic/models/useStudentModel/useGetStudent.ts';
import IStudentRepository from '@/logic/interfaces/repositoires/IStudentRepository.ts';
import useCreateStudent from '@/logic/models/useStudentModel/useCreateStudent.ts';
import useUpdateStudent from '@/logic/models/useStudentModel/useUpdateStudent.ts';
import useDeleteStudent from '@/logic/models/useStudentModel/useDeleteStudent.ts';
import { useEffect, useState } from 'react';

const useStudentModel = (id: number) => {
  const studentRepository = injectRepository({
    type: 'student',
  }) as IStudentRepository;

  const getStudents = useGetStudents(studentRepository);
  const getStudent = useGetStudent(id, studentRepository);
  const createStudent = useCreateStudent(studentRepository);
  const updateStudent = useUpdateStudent(studentRepository);
  const deleteStudent = useDeleteStudent(studentRepository);

  const students = getStudents.students;
  const [student, setStudent] = useState<UserDto>({
    id: 0,
    login: '',
    firstName: '',
    lastName: '',
    role: '',
  } as UserDto);

  useEffect(() => {
    if (getStudent.student) {
      setStudent(getStudent.student);
    }
  }, [getStudent.student]);

  return {
    students,
    getStudents,

    student,
    setStudent,
    getStudent,

    createStudent,
    updateStudent,
    deleteStudent,
  };
};

export default useStudentModel;
