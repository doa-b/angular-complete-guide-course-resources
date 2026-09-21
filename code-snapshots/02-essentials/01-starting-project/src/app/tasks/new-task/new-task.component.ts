import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // 3. Create an eventEmitter and expose it to the parent
  @Output() cancel = new EventEmitter<void>();

  // 4. Add a handler to sent the event
  onCancel() {
    this.cancel.emit()
  }
}
