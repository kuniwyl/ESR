import EntityBase from '@/domain/EntityBase.ts';

interface NoticeDto extends EntityBase {
  title: string;
  content: string;
  semesterId: number;
  day: string;
  slot: number;
}

export default NoticeDto;
