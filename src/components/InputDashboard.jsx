import InputField from "./InputField.jsx";

export default function InputDashboard({ inputs, setInputs, ...props }) {

    function handleChange(id, val) {
        setInputs(inputs => ({ 
                ...inputs,
                [id]: +val 
        }));
    };

    return (
        <div id="user-input" className="input-group">
            <span id="left-inputs">
                <InputField 
                    id="initialInvestment" 
                    title="Initial Investment" 
                    value={inputs["initialInvestment"]}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} 
                />
                <InputField 
                    id="annualInvestment"
                    title="Annual Investment" 
                    value={inputs["annualInvestment"]}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} 
                />
            </span>
            <span id="bottom-inputs">
                <InputField 
                    id="expectedReturn"
                    title="Expected Return" 
                    value={inputs["expectedReturn"]}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} 
                />
                <InputField 
                    id="duration" 
                    title="Duration" 
                    value={inputs["duration"]}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} 
                />
            </span>
        </div>
    )
}