import { Component, Input } from '@angular/core';
import {User} from "../dummy-users";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // 2. So it is safer to expect undefined
  @Input() name?: User['name'];
}
