import { Component, Input } from '@angular/core';
import {Task} from "../tasks.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // 3. Accept it as a required input
  @Input({required: true}) task!: Task;
}
