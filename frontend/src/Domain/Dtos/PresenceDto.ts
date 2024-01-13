import EntityBase from '@/domain/EntityBase.ts';
import PresenceStatus from '@/domain/dtos/PresenceStatus.ts';

interface PresenceDto extends EntityBase {
  presenceStatus: PresenceStatus;
  lessonId: number;
  lessonName?: string;
  cssId: number;
  studentId: number;
}

export default PresenceDto;
