import React, { useState } from "react";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    day: null,
    month: null,
    year: null,
  });

  const [age, setAge] = useState({
    years: null,
    months: null,
    days: null,
  });

  return (
    <main className="outer-container">
      <div className="inner-container">
        <Form
          setFormData={setFormData}
          formData={formData}
          validationErrors={validationErrors}
          setValidationErrors={setValidationErrors}
          setAge={setAge}
        />
        <Results age={age} />
      </div>
    </main>
  );
}

export default App;