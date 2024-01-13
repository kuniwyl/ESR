import './tdGrade.scss';
import FinalGradeDto from '@/domain/dtos/FinalGradeDto.ts';

interface TdGradeProps {
  grade: FinalGradeDto | undefined;
  onClick?: () => void;
}

const TdGrade = (props: TdGradeProps) => {
  const { grade } = props;

  return (
    <span
      className={`tdGrade`}
      style={style}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      {grade?.value}
    </span>
  );
};

const style = {
  width: '30px',
  height: '30px',
  border: '1px solid black',
};

export default TdGrade;
