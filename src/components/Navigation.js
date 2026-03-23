import React from "react";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../redux/resumeSlice";

function Navigation() {
  const dispatch = useDispatch();

  return (
    <div>
      <button id="back" onClick={() => dispatch(prevStep())}>
        Back
      </button>

      <button id="next" onClick={() => dispatch(nextStep())}>
        Next
      </button>

      <button id="save_continue" onClick={() => dispatch(nextStep())}>
        Save and Continue
      </button>
    </div>
  );
}

export default Navigation;