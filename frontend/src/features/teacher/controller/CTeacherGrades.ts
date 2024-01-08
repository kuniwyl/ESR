import useGetAssignmentsByCss from '@/logic/hooks/assignment/useGetAssignmentsByCss.ts';
import CTeacherMain from '@/features/teacher/controller/CTeacherMain.ts';
import GradeDto from '@/domain/dtos/GradeDto.ts';

const CTeacherGrades = (id: number) => {
  const mainController = CTeacherMain();
  const css = mainController.css.data?.data.find(css => css.id === id);

  const assigments = useGetAssignmentsByCss(id);
  const createTable = () => {
    if (!assigments.data?.data) return;
    const map = new Map<number, GradeDto[]>();
    assigments.data.data.forEach(assigment => {
      assigment.grades.forEach(grade => {
        if (map.has(grade.studentId)) {
          const grades = map.get(grade.studentId) as GradeDto[];
          grades.push(grade);
          map.set(grade.studentId, grades);
        } else {
          map.set(grade.studentId, [grade]);
        }
      });
    });
    return map;
  };
  const table = createTable();

  return { css, assigments, table };
};

export default CTeacherGrades;
