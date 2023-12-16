import EntityBase from '@/domain/EntityBase.ts';

interface ClassNoticeDto extends EntityBase {
  title: string;
  content: string;
  classId: number;
  semesterId: number;
  days: number;
  slot: number;
}

export default ClassNoticeDto;
