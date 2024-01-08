import EntityBase from '@/domain/EntityBase.ts';

interface ClassNoticeDto extends EntityBase {
  title: string;
  content: string;
  classId: number;
  semesterId: number;
  day: string;
  slot: number;
}

export default ClassNoticeDto;
