import { calculateInvestmentResults } from "../util/investment.js"
import { smartMoneyFormat } from "../util/format.js"

function deriveData(inputs) {                
    // return calculateInvestmentResults(inputs);
    const base = calculateInvestmentResults(inputs);

    let runningInterest = 0;
    let runningCapital = 0;

    return base.map(item => {
        runningInterest += item.interest;
        runningCapital = inputs.initialInvestment + (inputs.annualInvestment * item.year);

        return {
            ...item,
            totalInterestSoFar: runningInterest,
            totalCapitalSoFar: runningCapital
        };
    });
    }

export default function DataDisplay({ inputs, ...props }) {
    const derivedData = deriveData(inputs);

    // console.log("DATA: ", derivedData);
    // console.log("YEAR: ", derivedData[0].year);

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                {derivedData.length > 0 && (
                <tbody>
                    {derivedData.map((item, index) => 
                            <tr key={index}>
                                {/* {console.log(item)} */}
                                <td>{item["year"]}</td>
                                <td>{smartMoneyFormat(item["valueEndOfYear"])}</td>
                                <td>{smartMoneyFormat(item["interest"])}</td>
                                {/* <td>
                                    {smartMoneyFormat(
                                        derivedData
                                        .slice(0, index + 1)
                                        .reduce((acc, item) => acc + item["interest"], 0)
                                    )}
                                </td> */}
                                <td>{smartMoneyFormat(item["totalInterestSoFar"])}</td>
                                <td>{smartMoneyFormat(item["totalCapitalSoFar"])}</td> 
                            </tr>
                    )}
                </tbody>
                )}
            </table>
        </>
    )
}