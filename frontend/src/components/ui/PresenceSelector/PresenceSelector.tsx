import PresenceDto from '@/domain/dtos/PresenceDto.ts';
import PresenceStatus from '@/domain/dtos/PresenceStatus.ts';
import { ChangeEvent } from 'react';

interface PresenceSelectorProps {
  presence: PresenceDto;
  onChange: (
    presence: PresenceDto,
    newStatus: number,
    lessonId: number,
    studentId: number,
  ) => void;
  lessonId: number;
  studentId: number;
}

const PresenceSelector = (props: PresenceSelectorProps) => {
  const { presence, onChange } = props;
  const value =
    presence.presenceStatus == PresenceStatus.Absent
      ? 'N'
      : presence.presenceStatus == PresenceStatus.Present
      ? 'O'
      : presence.presenceStatus == PresenceStatus.Late
      ? 'S'
      : presence.presenceStatus == PresenceStatus.Excused
      ? 'U'
      : 'NW';

  const handleClick = (e: ChangeEvent<HTMLSelectElement>) => {
    const value =
      e.target.value == 'N'
        ? PresenceStatus.Absent
        : e.target.value == 'O'
        ? PresenceStatus.Present
        : e.target.value == 'S'
        ? PresenceStatus.Late
        : e.target.value == 'U'
        ? PresenceStatus.Excused
        : PresenceStatus.Absent;
    onChange(presence, value, props.lessonId, props.studentId);
  };

  return (
    <select value={value} onChange={handleClick}>
      <option value={'N'}>N</option>
      <option value={'O'}>O</option>
      <option value={'S'}>S</option>
      <option value={'U'}>U</option>
    </select>
  );
};

export default PresenceSelector;
