import IRPresence from '@/logic/repositories/interfaces/IRPresence.ts';
import PresenceDto from '@/domain/dtos/PresenceDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';
import { axiosInstance } from '@/configuration/apiConfig.ts';

class RPresence implements IRPresence {
  createPresence(presence: PresenceDto): Promise<ServiceResponse<PresenceDto>> {
    return axiosInstance.post('/presences', presence).then(response => {
      return response.data;
    });
  }

  updatePresence(presence: PresenceDto): Promise<ServiceResponse<PresenceDto>> {
    return axiosInstance
      .put('/presences/' + presence.id, presence)
      .then(response => {
        return response.data;
      });
  }
}

export default RPresence;
