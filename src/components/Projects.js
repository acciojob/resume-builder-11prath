import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "../redux/resumeSlice";
import Navigation from "./Navigation";

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.resume.projects);

  const [form, setForm] = useState({
    projectName: "",
    techStack: "",
    description: ""
  });

  const handleAdd = () => {
    dispatch(addProject(form));
    setForm({
      projectName: "",
      techStack: "",
      description: ""
    });
  };

  return (
    <div>
      <h2>Projects Section</h2>

      <input
        name="projectName"
        placeholder="Project Name"
        value={form.projectName}
        onChange={(e) => setForm({...form, projectName: e.target.value})}
      />

      <input
        name="techStack"
        placeholder="Tech Stack"
        value={form.techStack}
        onChange={(e) => setForm({...form, techStack: e.target.value})}
      />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({...form, description: e.target.value})}
      />

      <button id="add_project" onClick={handleAdd}>
        Add Project
      </button>

      {projects.map((p, index) => (
        <div key={index}>
          {p.projectName}
          <button id="delete" onClick={() => dispatch(deleteProject(index))}>
            Delete
          </button>
        </div>
      ))}

      <Navigation />
    </div>
  );
}

export default Projects;