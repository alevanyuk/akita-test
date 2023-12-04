import {Injectable} from "@angular/core";
import {QueryEntity} from "@datorama/akita";
import {Todo, TodosState, TodosStore, VISIBILITY_FILTER} from "./session.store";
import {combineLatest} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$ = combineLatest(
      this.selectVisibilityFilter$,
      this.selectAll(),
      this.getVisibleTodos
  );

  constructor(protected override store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter: any, todos: any[]): Todo[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
}