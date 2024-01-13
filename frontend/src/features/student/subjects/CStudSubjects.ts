import useGetSubjectsByStudent from '@/logic/hooks/students/useGetSubjectsByStudent.ts';
import GradeDto from '@/domain/dtos/GradeDto.ts';
import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';
import PresenceDto from '@/domain/dtos/PresenceDto.ts';

interface Grades {
  grades: GradeDto[];
  finalGrade: FinalGradeDto;
}

const CStudSubjects = () => {
  const css = useGetSubjectsByStudent();

  const createGrades = () => {
    if (!css.data?.data) return;

    const map = new Map<number, Grades>();
    css.data.data.classSubjectSemesters.forEach(css => {
      if (!map.has(css.id)) {
        map.set(css.id, {
          grades: [],
          finalGrade: {},
        });
      }
    });

    css.data.data.grades.forEach(grade => {
      if (!map.has(grade.classSubjectSemesterId)) {
        map.set(grade.classSubjectSemesterId, {
          grades: [],
          finalGrade: {},
        });
      }

      const grades = map.get(grade.classSubjectSemesterId);
      grades?.grades.push(grade);
    });

    css.data.data.finalGrades.forEach(finalGrade => {
      if (!map.has(finalGrade.classSubjectSemesterId)) {
        map.set(finalGrade.classSubjectSemesterId, {
          grades: [],
          finalGrade: {},
        });
      }

      const grades = map.get(finalGrade.classSubjectSemesterId);
      // grades?.finalGrade = finalGrade;
    });

    return map;
  };
  const grades = createGrades();

  const createPresences = () => {
    if (!css.data?.data) return;

    const map = new Map<number, PresenceDto>();
    css.data.data.classSubjectSemesters.forEach(css => {
      if (!map.has(css.id)) {
        map.set(css.id, 0);
      }
    });

    css.data.data.presences.forEach(presence => {
      const presences = map.get(presence.cssId);
      map.set(presence.cssId, presences! + 1);
    });

    return map;
  };

  return {
    css,
    grades,
  };
};

export default CStudSubjects;
