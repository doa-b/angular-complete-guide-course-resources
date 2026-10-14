import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  // If this module needs other modules. It needs to import it for itself.
  // It does not get it from parent modules
  // The Pipe and many other things are imported from the CommonModule
  imports: [SharedModule, CommonModule, FormsModule],
  declarations: [NewTaskComponent, TaskComponent, TasksComponent],
  exports: [TasksComponent]
})
export class TasksModule {}
