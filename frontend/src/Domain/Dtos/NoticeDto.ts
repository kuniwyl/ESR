import EntityBase from '@/domain/EntityBase.ts';
import ClassNoticeDto from '@/domain/dtos/ClassNoticeDto.ts';

interface NoticeDto extends EntityBase {
  title: string;
  content: string;
  semesterId: number;
  date: string;
  slot: number;
  isNotForAll: boolean;
  classNotices: ClassNoticeDto[];
}

export default NoticeDto;
