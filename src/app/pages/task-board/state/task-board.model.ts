import {guid} from "@datorama/akita";

export interface Task {
  id: number | string;
  title: string;
  time: number;
  priority: string;
}

export function createNewTask(params: Partial<Task>) {
  return {
    id: guid(),
    ...params
  } as Task;
}
