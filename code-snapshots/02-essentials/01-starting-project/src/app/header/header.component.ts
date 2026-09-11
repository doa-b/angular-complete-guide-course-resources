import { Component } from '@angular/core'

@Component({
  standalone: true, // angelar > 19 this is default. No need to set
  selector: 'app-header', // convention select by a tag of > 2 words
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
