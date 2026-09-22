import {Component, EventEmitter, Output, inject, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTask} from "../task/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // 6 Alternative way of injection without constructor
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }
    // 7. Now we can use the service instead of emitting an event to add a task
    // this.add.emit(newTask);
    this.tasksService.addTask(newTask, this.userId);
    // We DO need to send a close event though
    this.close.emit();
  }
}
