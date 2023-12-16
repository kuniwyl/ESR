import { injectClassModel } from '@/configuration/context/modelContext.ts';

const useClassViewModel = (id: number) => {
  const classModel = injectClassModel()(id);

  const handleClassChange = (name: string, value: string) => {
    classModel.setClassData(oldValue => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const handleClassCreate = () => {
    classModel.createClass.createClass(classModel.classData);
  };

  const handleClassUpdate = () => {
    classModel.updateClass.updateClass({
      id: id,
      classData: classModel.classData,
    });
  };

  const handleClassDelete = (id: number) => {
    classModel.deleteClass.deleteClass(id);
  };

  const handleAddStudent = (studentId: number) => {
    classModel.createStudent.addStudentClass({
      id: id,
      studentId,
    });
  };

  const handleRemoveStudent = (studentId: number) => {
    classModel.deleteStudent.deleteStudentClass({
      id: id,
      studentId,
    });
  };

  return {
    classes: classModel.classes,
    classesLoading: classModel.getClasses.state,

    classData: classModel.classData,
    handleClassChange,
    classDataLoading: classModel.getClass.state,

    students: classModel.students,
    studentsLoading: classModel.getStudents.state,

    handleClassCreate,
    classCreateLoading: classModel.createClass.state,

    handleClassUpdate,
    classUpdateLoading: classModel.updateClass.state,

    handleClassDelete,
    classDeleteLoading: classModel.deleteClass.state,

    handleAddStudent,
    classStudentAddLoading: classModel.createStudent.state,

    handleRemoveStudent,
    classStudentRemoveLoading: classModel.deleteStudent.state,
  };
};

export default useClassViewModel;
