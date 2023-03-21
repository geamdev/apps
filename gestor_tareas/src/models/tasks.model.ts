export enum TaskStatus {
  PENDING = "pendiente",
  IN_PROGRESS = "en proceso",
  COMPLETED = "finalizado",
}


export interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  status: TaskStatus;
  startedAt: Date;
  completedAt: Date | null;
}
