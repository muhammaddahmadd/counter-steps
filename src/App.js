import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const step = 1;

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps color">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMsg step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <button onClick={() => alert(`${messages[step - 1]}`)}>
                Learn how..
              </button>
            </div>
          </StepMsg>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="white"
              onClick={handlePrevious}
            >
              <span>⬅️</span>Previous
            </Button>

            <Button bgColor="#7950f2" textColor="white" onClick={handleNext}>
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMsg({ step, children }) {
  return (
    <p className="message">
      <h3> Step{step} </h3> {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default App;
