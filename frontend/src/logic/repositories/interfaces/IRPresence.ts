import PresenceDto from '@/domain/dtos/PresenceDto.ts';
import ServiceResponse from '@/domain/ServiceResponse.ts';

interface IRPresence {
  createPresence(presence: PresenceDto): Promise<ServiceResponse<PresenceDto>>;
  updatePresence(presence: PresenceDto): Promise<ServiceResponse<PresenceDto>>;
}

export default IRPresence;
