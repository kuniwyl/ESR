import Status from '@/domain/dtos/Status.ts';

interface EntityBase {
  id: number;
  created: Date;
  updated: Date;
  status: Status;
}

export default EntityBase;
