import {Component, computed, signal} from '@angular/core';

import {DUMMY_USERS} from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // create a signal value and store it in a property
  // Initial value can be passed to the signal function
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // we retrieve the computed value. Angular sets up a subscribtion to changes for you
  imagePath = computed (() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomIndex2 = Math.floor(Math.random() * DUMMY_USERS.length);
    // update the signal
    this.selectedUser.set(DUMMY_USERS[randomIndex2]);
  }
}
