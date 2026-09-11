import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // 3. mark it as settable from the outside
  // 3b. tell typescript with ! that we know it will be initialized
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // 4. re-instate your getter
  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {
    // do something
  }
}
