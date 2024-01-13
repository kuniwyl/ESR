import IRLesson from '@/logic/repositories/interfaces/IRLesson.ts';
import LessonDto from '@/domain/dtos/LessonDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

class RLesson implements IRLesson {
  createLesson(lesson: LessonDto): Promise<ServiceResponse<LessonDto>> {
    return axiosInstance.post('/lessons', lesson).then(response => {
      return response.data;
    });
  }

  getLessonsByCssId(cssId: string): Promise<ServiceResponse<LessonDto[]>> {
    return axiosInstance.get(`/lessons/${cssId}`).then(response => {
      return response.data;
    });
  }

  updateLesson(lesson: LessonDto): Promise<ServiceResponse<LessonDto>> {
    return axiosInstance.put('/lessons/' + lesson.id, lesson).then(response => {
      return response.data;
    });
  }
}

export default RLesson;
