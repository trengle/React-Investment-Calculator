import { useState } from "react";
import Header from "./components/Header";
import InputDashboard from "./components/InputDashboard";
import DataDisplay from "./components/DataDisplay";

const INITIAL_INPUTS = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
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
