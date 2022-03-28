import { Guid } from 'guid-typescript';

export interface Udalosti {
  id: string;
  event: string;
  machine: string;
  name: string;
  startTime: string;
  endTime: string;
  comment?: string;
}
