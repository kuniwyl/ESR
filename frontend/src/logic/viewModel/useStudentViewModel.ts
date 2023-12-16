import RegisterDto from '@/domain/dtos/RegisterDto.ts';
import { injectStudentModel } from '@/configuration/context/modelContext.ts';

const useStudentViewModel = (id: number) => {
  const studentModel = injectStudentModel()(id);

  const handleStudentChange = (name: string, value: string) => {
    studentModel.setStudent(oldValue => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const handleStudentCreate = (registerData: RegisterDto) => {
    studentModel.createStudent.createStudent(registerData);
  };

  const handleStudentUpdate = (registerData: RegisterDto) => {
    studentModel.updateStudent.updateStudent({
      id: id,
      studentData: registerData,
    });
  };

  const handleStudentDelete = (id: number) => {
    studentModel.deleteStudent.deleteStudent(id);
  };

  return {
    students: studentModel.students,
    studentsLoading: studentModel.getStudents.state,

    student: studentModel.student,
    handleStudentChange,
    studentLoading: studentModel.getStudent.state,

    handleStudentCreate,
    studentCreateLoading: studentModel.createStudent.state,

    handleStudentUpdate,
    studentUpdateLoading: studentModel.updateStudent.state,

    handleStudentDelete,
    studentDeleteLoading: studentModel.deleteStudent.state,
  };
};

export default useStudentViewModel;
