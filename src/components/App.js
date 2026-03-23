import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* MAIN HEADING */}
      <h1>RESUME GENERATOR</h1>

      {/* STEP 1 - PROFILE */}
      {step === 1 && (
        <div>
          <h2>Add your profile details</h2>
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
      )}

      {/* STEP 2 - EDUCATION */}
      {step === 2 && (
        <div>
          <h2>Add your Education Details</h2>
          <input placeholder="College" />
          <input placeholder="Degree" />
        </div>
      )}

      {/* STEP 3 - SKILLS */}
      {step === 3 && (
        <div>
          <h2>Add your Skills</h2>
          <input placeholder="Skill 1" />
          <input placeholder="Skill 2" />
        </div>
      )}

      {/* STEP 4 - PROJECTS */}
      {step === 4 && (
        <div>
          <h2>Add your Projects</h2>
          <input placeholder="Project Name" />
        </div>
      )}

      {/* STEP 5 - SOCIAL LINKS */}
      {step === 5 && (
        <div>
          <h2>Add your Social Media Links</h2>
          <input placeholder="LinkedIn" />
          <input placeholder="GitHub" />
        </div>
      )}

      {/* NEXT BUTTON (IMPORTANT) */}
      <button id="next" onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default App;