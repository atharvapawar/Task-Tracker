// src/app/Task.ts
export interface Task {
    id?: number;       // Optional because new tasks won't have an id
    text: string;
    day: string;
    reminder: boolean;
    completed: boolean;
  }
  