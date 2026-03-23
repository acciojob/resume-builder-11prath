import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "../redux/resumeSlice";
import Navigation from "./Navigation";

function Education() {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);

  const [form, setForm] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: ""
  });

  const handleAdd = () => {
    dispatch(addEducation(form));
    setForm({
      courseName: "",
      completionYear: "",
      college: "",
      percentage: ""
    });
  };

  return (
    <div>
      <input name="courseName" placeholder="Course Name"
        value={form.courseName}
        onChange={(e) => setForm({...form, courseName: e.target.value})}
      />

      <input name="completionYear" placeholder="Completion Year"
        value={form.completionYear}
        onChange={(e) => setForm({...form, completionYear: e.target.value})}
      />

      <input name="college" placeholder="College"
        value={form.college}
        onChange={(e) => setForm({...form, college: e.target.value})}
      />

      <input name="percentage" placeholder="Percentage"
        value={form.percentage}
        onChange={(e) => setForm({...form, percentage: e.target.value})}
      />

      <button id="add_education" onClick={handleAdd}>
        Add Education
      </button>

      {education.map((edu, index) => (
        <div key={index}>
          {edu.courseName}
          <button id="delete" onClick={() => dispatch(deleteEducation(index))}>
            Delete
          </button>
        </div>
      ))}

      <Navigation />
    </div>
  );
}

export default Education;