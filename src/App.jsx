import { useState } from "react";
import Header from "./components/Header";
import InputDashboard from "./components/InputDashboard";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS)  
  return (
    <>
      <Header />
      <InputDashboard />
      <DataDisplay />
    </>
  )
}

export default App
