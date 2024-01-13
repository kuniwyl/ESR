import GradeDto from '@/domain/dtos/GradeDto.ts';

import './tdGrade.scss';
import { useState } from 'react';

interface TdGradeProps {
  grade: GradeDto;
  onClick?: () => void;
}

const TdGrade = (props: TdGradeProps) => {
  const { grade } = props;
  const [mouseOver, setMouseOver] = useState(false);

  const color =
    grade.weight < 3 ? 'red' : grade.weight < 5 ? 'orange' : 'green';
  return (
    <span
      className={`tdGrade ${color}`}
      style={style}
      onClick={() => {
        props.onClick && props.onClick();
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {grade.value}
      {mouseOver && grade.description && (
        <div className={'gradeDescription'}>{grade.description}</div>
      )}
    </span>
  );
};

const style = {
  width: '30px',
  height: '30px',
  border: '1px solid black',
};

export default TdGrade;
