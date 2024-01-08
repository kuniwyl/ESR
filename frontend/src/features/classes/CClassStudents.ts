import useGetStudents from '@/logic/hooks/students/useGetStudents.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import useDeleteStudent from '@/logic/hooks/students/useDeleteStudent.ts';

const CClassStudents = (classId: number) => {
  const students = useGetStudents(classId);
  const deleteStudent = useDeleteStudent();
  const navigate = useNavigate();
  const navigateToEditStudent = (studentId: string) => {
    navigate(ROUTES.CLASS_STUDENTS_EDIT(classId.toString() ?? '', studentId));
  };

  const navigateToAddStudent = () => {
    navigate(ROUTES.CLASS_STUDENTS_ADD(classId.toString() ?? ''));
  };

  const deleteStudentById = (studentId: number) => {
    deleteStudent.mutate(studentId);
  };

  return {
    students,
    navigateToEditStudent,
    navigateToAddStudent,
    deleteStudentById,
  };
};

export default CClassStudents;
