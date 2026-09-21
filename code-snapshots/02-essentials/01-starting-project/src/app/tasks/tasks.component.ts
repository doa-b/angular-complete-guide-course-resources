import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {User} from "../user/user.model";
import {NewTask, Task} from "./task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";

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
  // 1. Add a flag to conditionally "open" the new task component
  isAddingTask = false;
  tasks: Array<Task> = [{
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  // 1. Add a way to cancel the dialog
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  // 6. The handler adds userId and id and pushes it into the tasks array to store it
  onAddTask(newTask: NewTask) {
    this.tasks.push({
      userId: this.userId,
      id: new Date().toString(),
      ...newTask
    });
    this.isAddingTask = false;
  }
}
