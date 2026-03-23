import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSocial, deleteSocial } from "../redux/resumeSlice";
import Navigation from "./Navigation";

function Social() {
  const dispatch = useDispatch();
  const social = useSelector((state) => state.resume.social);

  const [link, setLink] = useState("");

  const handleAdd = () => {
    if (!link) return;
    dispatch(addSocial(link));
    setLink("");
  };

  return (
    <div>
      <h2>Social Section</h2>

      <input
        name="Social"
        placeholder="Enter Social Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <button id="add_social" onClick={handleAdd}>
        Add Social
      </button>

      {social.map((s, index) => (
        <div key={index}>
          {s}
          <button onClick={() => dispatch(deleteSocial(index))}>
            Delete
          </button>
        </div>
      ))}

      <Navigation />
    </div>
  );
}

export default Social;