import ServiceResponse from '@/domain/ServiceResponse.ts';
import LessonDto from '@/domain/dtos/LessonDto.ts';

interface IRLesson {
  getLessonsByCssId(cssId: string): Promise<ServiceResponse<LessonDto[]>>;
  createLesson(lesson: LessonDto): Promise<ServiceResponse<LessonDto>>;
  updateLesson(lesson: LessonDto): Promise<ServiceResponse<LessonDto>>;
}

export default IRLesson;
