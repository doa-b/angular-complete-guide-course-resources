import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

// FormsModule is used in the imput component
// Currency pipe is used in the results component, so we need to import BrowserModule
@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
