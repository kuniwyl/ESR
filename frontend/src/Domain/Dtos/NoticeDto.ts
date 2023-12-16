import EntityBase from '@/domain/EntityBase.ts';

interface NoticeDto extends EntityBase {
  title: string;
  content: string;
  semesterId: number;
  days: number;
  slot: number;
}

export default NoticeDto;
