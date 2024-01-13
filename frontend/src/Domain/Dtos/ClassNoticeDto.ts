import EntityBase from '@/domain/EntityBase.ts';

interface ClassNoticeDto extends EntityBase {
  classId: number;
  noticeId: number;
}

export default ClassNoticeDto;
