import injectRepository from '@/configuration/context/repositoryContext.ts';
import ISubjectRepository from '@/logic/interfaces/repositoires/ISubjectRepository.ts';
import useGetSubjects from '@/logic/models/useSubjectModel/useGetSubjects.ts';
import useGetSubject from '@/logic/models/useSubjectModel/useGetSubject.ts';
import useCreateSubject from '@/logic/models/useSubjectModel/useCreateSubject.ts';
import useUpdateSubject from '@/logic/models/useSubjectModel/useUpdateSubject.ts';
import useDeleteSubject from '@/logic/models/useSubjectModel/useDeleteSubject.ts';
import useGetSubjectStudents from '@/logic/models/useSubjectModel/useGetSubjectStudents.ts';
import useAddSubjectStudent from '@/logic/models/useSubjectModel/useAddSubjectStudent.ts';
import useDeleteSubjectStudent from '@/logic/models/useSubjectModel/useDeleteSubjectStudent.ts';
import { useEffect, useState } from 'react';
import SubjectDto from '@/domain/dtos/SubjectDto.ts';

const useSubjectModel = (id: number) => {
  const subjectRepository = injectRepository({
    type: 'subject',
  }) as ISubjectRepository;

  const getSubjects = useGetSubjects(subjectRepository);
  const getSubject = useGetSubject(id, subjectRepository);
  const createSubject = useCreateSubject(subjectRepository);
  const updateSubject = useUpdateSubject(subjectRepository);
  const deleteSubject = useDeleteSubject(subjectRepository);

  const getStudents = useGetSubjectStudents(id, subjectRepository);
  const addStudent = useAddSubjectStudent(subjectRepository);
  const deleteStudent = useDeleteSubjectStudent(subjectRepository);

  const subjects = getSubjects.subjects;
  const students = getStudents.students;
  const [subject, setSubject] = useState<SubjectDto>({
    id: 0,
    name: '',
    description: '',
    teacher: {
      id: 0,
      login: '',
      firstName: '',
      lastName: '',
    },
  } as SubjectDto);

  useEffect(() => {
    if (getSubject.subject) {
      setSubject(getSubject.subject);
    }
  }, [getSubject.subject]);

  return {
    subjects,
    getSubjects,

    subject,
    setSubject,
    getSubject,

    students,
    getStudents,

    createSubject,
    updateSubject,
    deleteSubject,

    addStudent,
    deleteStudent,
  };
};

export default useSubjectModel;
