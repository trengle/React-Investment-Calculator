import { calculateInvestmentResults } from "../util/investment.js"
import { smartMoneyFormat } from "../util/format.js"

function deriveData(inputs) {                
    return calculateInvestmentResults(inputs);
}

export default function DataDisplay({ inputs, ...props }) {
    const derivedData = deriveData(inputs);

    return (
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
                {derivedData.map((item) => 
                        <tr key={item["year"]}>
                            <td>{item["year"]}</td>
                            <td>{smartMoneyFormat(item["valueEndOfYear"])}</td>
                            <td>{smartMoneyFormat(item["interest"])}</td>
                            <td>{smartMoneyFormat(item["totalInterestSoFar"])}</td>
                            <td>{smartMoneyFormat(item["totalCapitalSoFar"])}</td> 
                        </tr>
                )}
            </tbody>
            )}
        </table>
    )
}