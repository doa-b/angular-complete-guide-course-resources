import {Injectable} from '@angular/core'
import {NewTask, Task} from "./task/task.model";

const TASKS_LOCALSTORAGE_KEY = 'tasks';

@Injectable({providedIn: 'root'})
export class TasksService {
  private  tasks: Array<Task> = [{
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
 ];

  // 1. fetch the tasks from localstorage, when they are present.
  // Best to do this once on App start, so we use the constructor
  constructor() {
    // 1b. localstorage stores data as JSON
    const tasksJson = localStorage.getItem(TASKS_LOCALSTORAGE_KEY);

    if (tasksJson) {
      // 2. overwrite the "bootstrapped" tasks from the hardcoded array above
      // with the actual tasks from localStorage
      this.tasks = JSON.parse(tasksJson);
    }
  }

  getUserTasks(userId: string): Array<Task> {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.push({
      userId: userId,
      id: new Date().toString(),
      ...taskData
    });
    // 4. Call this private method when we change our tasks
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    // 4. Call this private method when we change our tasks
    this.saveTasks();
  }

  // 3. Create a private method to save our tasks to localstorage
  private saveTasks() {
    // 3. convert tasks array to a json string
    const tasksJSON = JSON.stringify(this.tasks);
    localStorage.setItem(TASKS_LOCALSTORAGE_KEY, tasksJSON);
  }
}
