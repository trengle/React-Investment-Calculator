import { useState } from "react";
import Header from "./components/Header";
import InputDashboard from "./components/InputDashboard";
import DataDisplay from "./components/DataDisplay";

const INITIAL_INPUTS = {
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null
};

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS)  
  return (
    <>
      <Header />
      <InputDashboard inputs={inputs} setInputs={setInputs} />
      <DataDisplay inputs={inputs} />
    </>
  )
}

export default App
