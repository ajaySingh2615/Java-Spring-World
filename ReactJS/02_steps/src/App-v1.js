import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="steps fade-in">
          <div className="numbers">
            <div className={`number ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`number ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`number ${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message slide-in">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              className="button"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button
              className="button"
              onClick={handleNext}
              disabled={step === 3}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ className, onClick, disabled, children }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
