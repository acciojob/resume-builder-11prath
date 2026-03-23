import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  profile: {},
  education: [],
  skills: [],
  projects: [],
  social: []
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },

    // Profile
    saveProfile: (state, action) => {
      state.profile = action.payload;
    },

    // Education
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },

    // Skills
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
      state.skills.splice(action.payload, 1);
    },

    // Projects
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },

    // Social
    addSocial: (state, action) => {
      state.social.push(action.payload);
    },
    deleteSocial: (state, action) => {
      state.social.splice(action.payload, 1);
    }
  }
});

export const {
  nextStep,
  prevStep,
  saveProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocial,
  deleteSocial
} = resumeSlice.actions;

export default resumeSlice.reducer;