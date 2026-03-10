import React from "react";

function StepNavigation({ step, totalSteps, next, back }) {

  return (
    <div style={{ marginTop: "20px" }}>

      <p>Step {step} of {totalSteps}</p>

      <div>

        {step > 1 && (
          <button onClick={back}>
            Back
          </button>
        )}

        {step < totalSteps && (
          <button onClick={next}>
            Next
          </button>
        )}

        {step === totalSteps && (
          <button onClick={() => alert("Form Submitted")}>
            Submit
          </button>
        )}

      </div>

    </div>
  );
}

export default StepNavigation;