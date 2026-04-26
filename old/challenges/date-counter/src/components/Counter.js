import { useState } from "react";
import "./styles/counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + count);
  
  return (
    <div>
      <div className="step-container">
        <input
          type="range"
          min="0"
          max="10"
          style={{ marginBottom: "20px" }}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <div>
          <span>Step: {step}</span>
        </div>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>

        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />

        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{futureDate.toDateString}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}

export default Counter;
