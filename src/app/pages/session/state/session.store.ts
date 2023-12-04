import {EntityState, EntityStore, guid, StoreConfig} from '@datorama/akita';
import {Injectable} from "@angular/core";

export enum VISIBILITY_FILTER {
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_ALL = 'SHOW_ALL'
}

export type TodoFilter = {
    label: string;
    value: VISIBILITY_FILTER;
};

export const initialFilters: TodoFilter[] = [
    { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
    { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
    { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
];

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

export function createTodo(title: string) {
    return {
        id: guid(),
        title,
        completed: false
    } as Todo;
}

export interface TodosState extends EntityState<Todo, string> {
    ui: {
        filter: VISIBILITY_FILTER
    };
}

const initialState = {
    ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
    constructor() {
        super(initialState);
    }
}