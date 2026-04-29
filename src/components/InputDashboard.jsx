import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js"
import InputField from "./InputField.jsx";

const INITIAL_INPUTS = {
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null
};

function deriveData(inputs) {                ;
    return calculateInvestmentResults(inputs);
}

export default function InputDashboard() {
    const [inputs, setInputs] = useState(INITIAL_INPUTS)

    function handleChange(e) {
        let curId = e.target.id;
        let newVal = Number(e.target.value);
        console.log(newVal);
        console.log(curId);
        setInputs(inputs => {
            let newInputs = { 
                ...inputs,
                [curId]: newVal }
            console.log(newInputs)
            return newInputs
        })
    };

    const derivedData = deriveData(inputs);

    return (
        <div id="user-input" className="input-group">
            <p>{console.log(`DATA: ${JSON.stringify(derivedData)}`)}</p>
            <span id="left-inputs">
                <InputField 
                    id="initialInvestment" 
                    title="Initial Investment" 
                    onChange={handleChange} 
                />
                <InputField 
                    id="expectedReturn"
                    title="Expected Return" 
                    onChange={handleChange} 
                />
            </span>
            <span id="bottom-inputs">
                <InputField 
                    id="annualInvestment"
                    title="Annual Investment" 
                    onChange={handleChange} 
                />
                <InputField 
                    id="duration" 
                    title="Duration" 
                    onChange={handleChange} 
                />
            </span>
        </div>
    )
}