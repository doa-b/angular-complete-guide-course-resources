import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

export type SubmittedValues = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';
  // 1. Define an output property to emit the submitted values
  @Output() submittedValues = new EventEmitter<SubmittedValues>();

  protected onSubmit() {
    const submittedValues = {
      // 2. Convert the string values to numbers before emitting
      // In Angular you can do this by using the Number() function or the unary plus operator (+)
      initialInvestment: Number(this.initialInvestment),
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    };
    this.submittedValues.emit(submittedValues);
  }
}
