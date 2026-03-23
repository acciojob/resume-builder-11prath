import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProfile } from "../redux/resumeSlice";
import Navigation from "./Navigation";

function Profile() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    address: "",
    url: ""
  });

  const handleSave = () => {
    dispatch(saveProfile(form));
  };

  return (
    <div>
      <h2>Profile Section</h2>

      <input name="fname" placeholder="First Name"
        onChange={(e) => setForm({...form, fname: e.target.value})}
      />

      <input name="lname" placeholder="Last Name"
        onChange={(e) => setForm({...form, lname: e.target.value})}
      />

      <input name="phone" placeholder="Phone"
        onChange={(e) => setForm({...form, phone: e.target.value})}
      />

      <input name="address" placeholder="Address"
        onChange={(e) => setForm({...form, address: e.target.value})}
      />

      <input name="url" placeholder="Image URL"
        onChange={(e) => setForm({...form, url: e.target.value})}
      />

      <button id="save_continue" onClick={handleSave}>
        Save
      </button>

      <Navigation />
    </div>
  );
}

export default Profile;     