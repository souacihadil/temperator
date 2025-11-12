import React, { useState } from "react";
import "./App.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");      
  const [fahrenheit, setFahrenheit] = useState(""); 

  // function de transfer m, sel to feh
  const convertCtoF = (c) => (c * 9/5) + 32; 
  // l3akss dok
  const convertFtoC = (f) => (f - 32) * 5/9;

  // if user enter in celsius input
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);            
    if (value === "") {
      setFahrenheit("");          
    } else {
      setFahrenheit(convertCtoF(parseFloat(value))); // parseFloat يحول النص لرقم عشري
    }
  };

  // if user enter in fahrenheit input
  const handleFahrenheitChange = (e) => {
    const value = e.target.value; 
    setFahrenheit(value);         // sauvegarder dans state
    if (value === "") {
      setCelsius("");            
      setCelsius(convertFtoC(parseFloat(value))); 
    }
  };

  // frontend ta3 l'application  
  return (
    <div className="converter-container">
  <h2 className="converter-title"> محول درجات الحرارة</h2>
  <div className="input-group">
    <input
      type="number"
      value={celsius}
      onChange={handleCelsiusChange}
      placeholder="Celsius"
      className="converter-input"
    />
  </div>
  <div className="input-group">
    <input
      type="number"
      value={fahrenheit}
      onChange={handleFahrenheitChange}
      placeholder="Fahrenheit"
      className="converter-input"
    />
  </div>
</div>

  );
}

export default TemperatureConverter;

