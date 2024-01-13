import IRNotice from '@/logic/repositories/interfaces/IRNotice.ts';
import NoticeDto from '@/domain/dtos/NoticeDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

class RNotice implements IRNotice {
  getNoticeBySemesterId(
    semesterId: number,
  ): Promise<ServiceResponse<NoticeDto[]>> {
    return axiosInstance
      .get(`/notices/semester/${semesterId}`)
      .then(response => {
        return response.data;
      });
  }

  getNoticeBySemseterIdBetweenDates(
    semesterId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<ServiceResponse<NoticeDto[]>> {
    return axiosInstance
      .get(
        `/notices/semester/${semesterId}/fromDate/${startDate}/toDate/${endDate}`,
      )
      .then(response => {
        return response.data;
      });
  }

  getNoticeByUserAndSemesterIdBetweenDates(
    semesterId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<ServiceResponse<NoticeDto[]>> {
    return axiosInstance
      .get(
        `/notices/user/semester/${semesterId}/fromDate/${startDate}/toDate/${endDate}`,
      )
      .then(response => {
        return response.data;
      });
  }

  getNociceByUserAndSemesterId(
    semesterId: number,
  ): Promise<ServiceResponse<NoticeDto[]>> {
    return axiosInstance
      .get(`/notices/user/semester/${semesterId}`)
      .then(response => {
        return response.data;
      });
  }

  createNotice(notice: NoticeDto): Promise<ServiceResponse<NoticeDto>> {
    return axiosInstance.post('/notices', notice).then(response => {
      return response.data;
    });
  }
  updateNotice(notice: NoticeDto): Promise<ServiceResponse<NoticeDto>> {
    return axiosInstance.put('/notices/' + notice.id, notice).then(response => {
      return response.data;
    });
  }
  deleteNotice(id: number): Promise<ServiceResponse<NoticeDto>> {
    return axiosInstance.delete('/notices/' + id).then(response => {
      return response.data;
    });
  }
}

export default RNotice;
