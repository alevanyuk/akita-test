import {guid, ID} from "@datorama/akita";

export interface TaskList {
  id: ID;
  name: string;
  date: number | Date;
  items: Task[];
}
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

export function createNewTaskList(listName: string): TaskList {
  return {
    id: guid(),
    name: listName,
    date: new Date(),
    items: []
  }
}
