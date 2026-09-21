import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Task} from "./task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  // 3. Set an output for that event
  @Output() complete = new EventEmitter<string>();

  // 2. Act on it by emitting an event to parent
  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
