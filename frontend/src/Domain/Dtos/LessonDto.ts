import EntityBase from '@/domain/EntityBase.ts';
import PresenceDto from '@/domain/dtos/PresenceDto.ts';

interface LessonDto extends EntityBase {
  name: string;
  description: string;
  classSubjectSemesterId: number;
  presences: PresenceDto[];
}

export default LessonDto;
