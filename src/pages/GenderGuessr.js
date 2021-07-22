import { useState } from "react";
import Guessr from "../components/guessr/Guessr.js";

export default function GenderGuessr({ personName, setPersonName }) {
  const [gender, setGender] = useState(null);

  function handleFormSubmit(e) {
    console.log("yohoo gender");
    e.preventDefault();
    const form = e.target;
    fetch(`https://api.genderize.io?name=${form.name.value}`)
      .then((res) => res.json())
      .then((data) => {
        setGender(data?.gender || "No Gender");
      });
  }

  return (
    <div className="Page Page--GenderGuessr">
      <Guessr
        personName={personName || null}
        setPersonName={setPersonName}
        guessedAttrName="gender"
        guessedAttrState={gender}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
