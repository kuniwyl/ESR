import { API_URL, specifiedHeaders } from '@/configuration/config.ts';
import ISchoolRepository from '@/logic/interfaces/repositoires/ISchoolRepository.ts';
import SchoolDataDto from '@/domain/dtos/SchoolDataDto.ts';
import axios from 'axios';

const SCHOOL_URL = API_URL + '/schools';

class SchoolRepository implements ISchoolRepository {
  getSchool(): Promise<SchoolDataDto> {
    return axios
      .get(SCHOOL_URL, {
        headers: specifiedHeaders(),
      })
      .then(response => response.data);
  }
}

export default SchoolRepository;
