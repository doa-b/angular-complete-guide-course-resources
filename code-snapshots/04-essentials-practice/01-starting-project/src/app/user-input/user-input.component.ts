import {Component, signal} from '@angular/core';
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  protected onSubmit() {
    this.investmentService.calculateInvestmentResults({
       initialInvestment: +this.initialInvestment(),
       annualInvestment: +this.annualInvestment(),
       expectedReturn: +this.expectedReturn(),
       duration: +this.duration()
     })

    // optionally reset the form values after submission
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
