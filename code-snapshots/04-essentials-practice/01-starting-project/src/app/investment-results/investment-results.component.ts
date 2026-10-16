import {Component, Input} from '@angular/core';
import {investmentOutput} from "../investment-output.model";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() annualData?: investmentOutput[] = [];
}
