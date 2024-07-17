// src/ToggleCounterComponent.js
import React, { useState } from 'react';


const ToggleCounterComponent = () => {
  const [count, setCount] = useState(0);
  const [isIncrement, setIsIncrement] = useState(true);
  const [step, setStep] = useState(1);

  const handleToggle = () => {
    setIsIncrement(!isIncrement);
  };

  const handleAction = () => {
    setCount(prevCount => isIncrement ? prevCount + step : prevCount - step);
  };

  const handleStepChange = (event) => {
    setStep(Number(event.target.value));
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <input
        type="number"
        value={step}
        onChange={handleStepChange}
        min="1"
      />
      <button onClick={handleAction}>
        {isIncrement ? `Increment by ${step}` : `Decrement by ${step}`}
      </button>
      <button onClick={handleToggle}>
        Toggle to {isIncrement ? 'Decrement' : 'Increment'}
      </button>
    </div>
  );
};

export default ToggleCounterComponent;
