import React, { useState } from 'react';
import './App.css';

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const dob = new Date(dateOfBirth);
    const now = new Date();
    const diff = now - dob;
    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator-container">
      <label className="dob-label">
        <strong>Enter your date of birth</strong>
      </label>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        className="date-input"
      />
      <button onClick={calculateAge} className="calculate-button">
        Calculate Age
      </button>
      {age && <div className="result-text">{`You are ${age} years old`}</div>}
    </div>
  );
};

export default AgeCalculator;
