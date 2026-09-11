import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, // auto-registers this component and uses it
    UserComponent,
  ],
  templateUrl: './app.component.html', // markup
  styleUrl: './app.component.css',
})
export class AppComponent {}
