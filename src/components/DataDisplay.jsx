import { calculateInvestmentResults } from "../util/investment.js"

function deriveData(inputs) {                ;
    return calculateInvestmentResults(inputs);
}

export default function DataDisplay({ inputs, ...props }) {
    const derivedData = deriveData(inputs);

    console.log("DATA: ", derivedData[0]);
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
                    <tr>
                        <td>{derivedData[derivedData.length -1].year}</td>
                        {/* <td>{derivedData && derivedData[0]["valueEndOfYear"]}</td> */}
                    </tr>
                </tbody>
                )}
            </table>
        </>
    )
}