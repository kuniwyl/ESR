import PresenceDto from '@/domain/dtos/PresenceDto.ts';
import { useState } from 'react';
import PresenceStatus from '@/domain/dtos/PresenceStatus.ts';

import './style.scss';

interface FrequenceDisplayProps {
  frequence: PresenceDto;
}

const FrequenceDisplay = (props: FrequenceDisplayProps) => {
  const { frequence } = props;
  const [mouseOver, setMouseOver] = useState(false);
  const value =
    frequence.presenceStatus == PresenceStatus.Absent
      ? 'N'
      : frequence.presenceStatus == PresenceStatus.Present
      ? 'O'
      : frequence.presenceStatus == PresenceStatus.Late
      ? 'S'
      : frequence.presenceStatus == PresenceStatus.Excused
      ? 'U'
      : 'NW';

  return (
    <span
      className={`frequenceDisplay`}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {value}
      {mouseOver && frequence.lessonName && (
        <div className={'frequenceDescription'}>{frequence.lessonName}</div>
      )}
    </span>
  );
};

export default FrequenceDisplay;
