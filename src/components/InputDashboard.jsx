import { useState } from "react";
import InputField from "./InputField.jsx";

// function deriveData(inputs) {                ;
//     return calculateInvestmentResults(inputs);
// }

export default function InputDashboard({ inputs, setInputs, ...props }) {
    // const [inputs, setInputs] = useState(INITIAL_INPUTS)

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

    // const derivedData = deriveData(inputs);

    return (
        <div id="user-input" className="input-group">
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