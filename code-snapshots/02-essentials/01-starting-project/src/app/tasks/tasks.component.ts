import { Component, Input } from '@angular/core';
import {User} from "../dummy-users";
import {TaskComponent} from "./task/task.component";
// 1. Type Task
export interface Task {
  id: string,
  userId: User['id']
  title: string
  summary: string
  dueDate: string
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: User['name'];
  @Input({required: true}) userId!: User['id'];
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
}
