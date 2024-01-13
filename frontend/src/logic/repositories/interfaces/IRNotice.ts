import ServiceResponse from '@/domain/ServiceResponse.ts';
import NoticeDto from '@/domain/dtos/NoticeDto.ts';

interface IRNotice {
  getNoticeBySemesterId(
    semesterId: number,
  ): Promise<ServiceResponse<NoticeDto[]>>;

  getNoticeBySemseterIdBetweenDates(
    semesterId: number,
    startDate: string,
    endDate: string,
  ): Promise<ServiceResponse<NoticeDto[]>>;

  getNociceByUserAndSemesterId(
    semesterId: number,
  ): Promise<ServiceResponse<NoticeDto[]>>;

  getNoticeByUserAndSemesterIdBetweenDates(
    semesterId: number,
    startDate: string,
    endDate: string,
  ): Promise<ServiceResponse<NoticeDto[]>>;

  createNotice(notice: NoticeDto): Promise<ServiceResponse<NoticeDto>>;

  updateNotice(notice: NoticeDto): Promise<ServiceResponse<NoticeDto>>;

  deleteNotice(id: number): Promise<ServiceResponse<NoticeDto>>;
}

export default IRNotice;
