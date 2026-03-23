import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const addSkill = () => {
    if (skillInput) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const deleteSkill = () => {
    setSkills([]);
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      {/* HEADER */}
      <div
        style={{
          background: "#ff0055",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        RESUME GENERATOR
      </div>

      {/* STEP INDICATOR */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <span>1 Profile</span> → <span>2 Education</span> →{" "}
        <b>3 Skills</b> → <span>4 Project</span> → <span>5 Social</span>
      </div>

      {/* CONTENT BOX */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "30px",
          margin: "20px",
          borderRadius: "5px",
        }}
      >
        {/* PROFILE */}
        {step === 1 && (
          <>
            <h2>Add your profile details</h2>
            <input name="fname" placeholder="First Name" /><br /><br />
            <input name="lname" placeholder="Last Name" /><br /><br />
            <input name="phone" placeholder="Phone" /><br /><br />
            <input name="address" placeholder="Address" /><br /><br />
            <input name="url" placeholder="Image URL" />
          </>
        )}

        {/* EDUCATION */}
        {step === 2 && (
          <>
            <h2>Add your Education Details</h2>
            <input name="courseName" placeholder="Course" /><br /><br />
            <input name="completionYear" placeholder="Year" /><br /><br />
            <input name="college" placeholder="College" /><br /><br />
            <input name="percentage" placeholder="Percentage" /><br /><br />

            <button id="add_education">Add</button>
            <button id="delete">Delete</button>
          </>
        )}

        {/* SKILLS */}
        {step === 3 && (
          <>
            <h2>Add your Skills</h2>

            <input
              name="skill"
              placeholder="Skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
            />

            <div style={{ marginTop: "20px" }}>
              <button id="delete_skill" onClick={deleteSkill}>
                DELETE SKILL
              </button>

              <button
                id="add_skill"
                onClick={addSkill}
                style={{ marginLeft: "10px", background: "blue", color: "white" }}
              >
                ADD SKILL
              </button>
            </div>

            {/* SHOW SKILLS */}
            <ul>
              {skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </>
        )}

        {/* PROJECT */}
        {step === 4 && (
          <>
            <h2>Add your Projects</h2>
            <input name="projectName" placeholder="Project Name" /><br /><br />
            <input name="techStack" placeholder="Tech Stack" /><br /><br />
            <input name="description" placeholder="Description" /><br /><br />

            <button id="add_project">Add Project</button>
            <button id="delete">Delete</button>
          </>
        )}

        {/* SOCIAL */}
        {step === 5 && (
          <>
            <h2>Add your Social Media Links</h2>
            <input name="Social" placeholder="Social Link" /><br /><br />

            <button id="add_social">Add Social</button>
          </>
        )}
      </div>

      {/* NAV BUTTONS */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {step > 1 && (
          <button id="back" onClick={back}>
            BACK
          </button>
        )}

        {step < 5 && (
          <button
            id="next"
            onClick={next}
            style={{ margin: "0 10px", background: "#ff0055", color: "white" }}
          >
            NEXT
          </button>
        )}

        {step === 5 && (
          <button id="save_continue" style={{ background: "#ff0055", color: "white" }}>
            SAVE AND CONTINUE
          </button>
        )}
      </div>
    </div>
  );
}

export default App;