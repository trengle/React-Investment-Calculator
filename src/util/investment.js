// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let runningInterest = 0; // moved from DataDisplay.jsx
  let runningCapital = 0; // moved from DataDisplay.jsx

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    runningInterest += interestEarnedInYear; // moved from DataDisplay.jsx
    runningCapital = initialInvestment + (annualInvestment * (i + 1)); // moved from DataDisplay.jsx

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      totalInterestSoFar: runningInterest, // moved from DataDisplay.jsx
      totalCapitalSoFar: runningCapital // moved from DataDisplay.jsx
    });
  }

  return annualData;
}
