import { useState } from "react";
import InputField from "./InputField.jsx";

export default function InputDashboard({ inputs, setInputs, ...props }) {

    function handleChange(e) {
        let curId = e.target.id;
        let newVal = Number(e.target.value);

        setInputs(inputs => {
            let newInputs = { 
                ...inputs,
                [curId]: newVal }
            return newInputs
        })
    };

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