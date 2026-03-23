import React from "react";
import { useSelector } from "react-redux";

import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Social from "./components/Social";

function App() {
  const step = useSelector((state) => state.resume.step);

  switch (step) {
    case 1: return <Profile />;
    case 2: return <Education />;
    case 3: return <Skills />;
    case 4: return <Projects />;
    case 5: return <Social />;
    default: return <Profile />;
  }
}

export default App;