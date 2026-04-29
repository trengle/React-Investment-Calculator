import { calculateInvestmentResults } from "../util/investment.js"

function deriveData(inputs) {                ;
    return calculateInvestmentResults(inputs);
}

export default function DataDisplay({ inputs, ...props }) {
    const derivedData = deriveData(inputs);

    console.log("DATA: ", ...derivedData);

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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>$16,725</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}