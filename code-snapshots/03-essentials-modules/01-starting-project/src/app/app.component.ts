import {Component} from '@angular/core';
import {DUMMY_USERS} from './dummy-users';

@Component({
  selector: 'app-root',
  // 4. Now we need to set standalone to false
  // standalone: true,
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // 5. now we do not need this anymore
  // imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
