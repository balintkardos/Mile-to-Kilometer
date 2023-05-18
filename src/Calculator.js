import React, { useState } from 'react';

const Calculator = () => {
  const [minutes, setMinutes] = useState(8);
  const [seconds, setSeconds] = useState(0);

  // Calculate the number of kilometers in the given minutes and seconds.
  const kmmin = Math.floor(((minutes * 60 + seconds) * 0.621371) / 60);

  // Calculate the number of seconds in the given minutes and seconds.
  const kmsec = parseFloat(((minutes * 60 + seconds) * 0.621371 / 60 - kmmin) * 60).toFixed(2);


  return (
    <div>
      <p>Kilometers per minute: {kmmin}</p>
      <p>Kilometers per second: {kmsec}</p>

      <div>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
        </label>
      </div>

      <div>
      <label>
  Seconds:
  <input
    type="number"
    value={seconds}
    onChange={(e) => {
      const inputValue = parseInt(e.target.value);
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue < 60) {
        setSeconds(inputValue);
      }
    }}
  />
</label>

      </div>
    </div>
  );
};

export default Calculator;

