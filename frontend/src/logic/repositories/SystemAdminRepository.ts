import { API_URL, specifiedHeaders } from '@/configuration/config.ts';
import SchoolDto from '@/domain/dtos/SchoolDto.ts';
import ISystemAdminRepository from '@/logic/interfaces/repositoires/ISystemAdminRepository.ts';
import axios from 'axios';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

const SYSTEM_ADMIN_URL = API_URL + '/system-admin/schools';

class SystemAdminRepository implements ISystemAdminRepository {
  async getSchools() {
    return axios
      .get(SYSTEM_ADMIN_URL, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async getSchool(id: number) {
    return axios
      .get(SYSTEM_ADMIN_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async createSchool(school: SchoolDto) {
    return axios
      .post(SYSTEM_ADMIN_URL, school, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async updateSchool(school: SchoolDto) {
    return axios
      .put(SYSTEM_ADMIN_URL + '/' + school.id, school, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async deleteSchool(id: number) {
    return axios
      .delete(SYSTEM_ADMIN_URL + '/' + id, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async addAdmin({
    id,
    admin,
  }: {
    id: number;
    admin: RegisterDto;
  }): Promise<void> {
    return axios
      .post(SYSTEM_ADMIN_URL + '/' + id + '/school-admins', admin, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async editAdmin({
    id,
    adminId,
    admin,
  }: {
    id: number;
    adminId: number;
    admin: RegisterDto;
  }): Promise<void> {
    return axios
      .put(SYSTEM_ADMIN_URL + '/' + id + '/school-admins/' + adminId, admin, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }

  async removeAdmin({
    id,
    adminId,
  }: {
    id: number;
    adminId: number;
  }): Promise<void> {
    return axios
      .delete(SYSTEM_ADMIN_URL + '/' + id + '/school-admins/' + adminId, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }
}

export default SystemAdminRepository;
