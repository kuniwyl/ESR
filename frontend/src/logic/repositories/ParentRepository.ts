import { API_URL, specifiedHeaders } from '@/configuration/config.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';
import IParentRepository from '@/logic/interfaces/repositoires/IParentRepository.ts';
import axios from 'axios';

const PARENT_URL = API_URL + '/parents';

class ParentRepository implements IParentRepository {
  async getParents() {
    return axios
      .get(PARENT_URL, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async getParent(id: number) {
    return axios
      .get(PARENT_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async createParent({
    studentId,
    parentData,
  }: {
    studentId: number;
    parentData: RegisterDto;
  }): Promise<void> {
    return axios
      .post(PARENT_URL + '/' + studentId, parentData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async updateParent({
    id,
    parentData,
  }: {
    id: number;
    parentData: RegisterDto;
  }): Promise<void> {
    return axios
      .put(PARENT_URL + '/' + id, parentData, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async deleteParent(id: number): Promise<void> {
    return axios
      .delete(PARENT_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }
}

export default ParentRepository;
