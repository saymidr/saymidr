export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface BrainstormMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum BotState {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  RESPONDING = 'RESPONDING',
}