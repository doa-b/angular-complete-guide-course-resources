import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // 1. We need an ID of that user
  @Input({required: true}) id!: string
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // 2. assign an event emmitter
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {
    // 3. use that emitter to send the id upwards
    this.select.emit(this.id)
  }
}
