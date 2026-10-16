import {Injectable} from "@angular/core";
import {InvestmentInput} from "./investment-input.model";
import {investmentOutput} from "./investment-output.model";

@Injectable({
  providedIn: 'root'})
export class InvestmentService {

  resultData?: investmentOutput[] = [];

  calculateInvestmentResults(submittedValues: InvestmentInput) {
    const result = [];
    const {initialInvestment, annualInvestment, expectedReturn, duration} = submittedValues;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      result.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultData = result;
  }
}
