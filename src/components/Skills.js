import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill } from "../redux/resumeSlice";
import Navigation from "./Navigation";

function Skills() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);

  const [skill, setSkill] = useState("");

  const handleAdd = () => {
    if (!skill) return;
    dispatch(addSkill(skill));
    setSkill("");
  };

  return (
    <div>
      <h2>Skills Section</h2>

      <input
        name="skill"
        placeholder="Enter Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button id="add_skill" onClick={handleAdd}>
        Add Skill
      </button>

      {skills.map((s, index) => (
        <div key={index}>
          {s}
          <button
            id="delete_skill"
            onClick={() => dispatch(deleteSkill(index))}
          >
            Delete
          </button>
        </div>
      ))}

      <Navigation />
    </div>
  );
}

export default Skills;