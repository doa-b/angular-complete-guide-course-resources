import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {User} from "../user/user.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: User['name'];
  @Input({required: true}) userId!: User['id'];

  isAddingTask = false;

  // 4. Let Angular take care of dependancy injection of services
  // You tell Angular which type of value you need and Angular creates it and provides it as an argument
  // by adding the private (or public) keyword here, it will auto create a property of the same name
  constructor(private taskService: TasksService) {}


  get selectedUserTasks() {
    // 5. Use your service
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }


  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
