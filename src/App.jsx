import React, { useState } from "react";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import { motion } from "framer-motion";
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
const bounceIn = {
  hidden:{
    y:"-100%", scale:0.5, opacity:0.5
  },
  visible:{
    y:0, scale:1, opacity:1,
    transition:{
      type:"spring",
      delay:0.1,
      duration:1,
      damping:15,
      mass:1
    }
  },
}
  return (
    <main className="outer-container">
      <motion.div 
      variants={bounceIn}
      initial="hidden"
      animate="visible"
      className="inner-container"

      >
        <Form
          setFormData={setFormData}
          formData={formData}
          validationErrors={validationErrors}
          setValidationErrors={setValidationErrors}
          setAge={setAge}
        />
        <Results age={age} />
      </motion.div>
    </main>
  );
}

export default App;