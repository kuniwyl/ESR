import IRParent from '@/logic/repositories/interfaces/IRParent.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import ParentDto from '@/domain/dtos/ParentDto.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';
import CreateParentDto from '@/domain/dtos/CreateParentDto.ts';

const url = 'parents';

class RParent implements IRParent {
  getParentsFromClass(classId: number): Promise<ServiceResponse<ParentDto[]>> {
    return axiosInstance.get(`${url}/class/${classId}`).then(response => {
      return response.data;
    });
  }

  createParent(parent: CreateParentDto): Promise<ServiceResponse<ParentDto>> {
    return axiosInstance
      .post(url + '/createWithStudent', parent)
      .then(response => {
        return response.data;
      });
  }

  deleteParent(parentId: number): Promise<ServiceResponse<boolean>> {
    return axiosInstance.delete(`${url}/${parentId}`).then(response => {
      return response.data;
    });
  }

  getParent(parentId: number): Promise<ServiceResponse<ParentDto>> {
    return axiosInstance.get(`${url}/${parentId}`).then(response => {
      return response.data;
    });
  }

  updateParent(parent: ParentDto): Promise<ServiceResponse<ParentDto>> {
    return axiosInstance.put(url + '/' + parent.id, parent).then(response => {
      return response.data;
    });
  }
}

export default RParent;
