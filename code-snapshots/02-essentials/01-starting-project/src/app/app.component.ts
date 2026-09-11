import {Component, Input} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
  ],
  templateUrl: './app.component.html', // markup
  styleUrl: './app.component.css',
})
export class AppComponent {
  // 1. expose the imported data into its template
  users = DUMMY_USERS;
}
