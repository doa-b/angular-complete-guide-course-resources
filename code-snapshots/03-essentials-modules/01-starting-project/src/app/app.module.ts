import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {BrowserModule} from "@angular/platform-browser";
import {CardComponent} from "./shared/card/card.component";
import {FormsModule} from "@angular/forms";
import {TaskComponent} from "./tasks/task/task.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    NewTaskComponent,
    TaskComponent,
    TasksComponent
  ],
  bootstrap: [AppComponent],
  // DatePipe is included in Browsermodule, so we do not need to import it
  // But we DO need to import FormsModule, instead of importing it in new-task
  imports: [BrowserModule, FormsModule]
})
export class AppModule {
}
