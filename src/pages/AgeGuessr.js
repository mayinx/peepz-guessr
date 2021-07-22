import { useState } from "react";
import Guessr from "../components/guessr/Guessr.js";

export default function AgeGuessr({ personName, setPersonName }) {
  const [age, setAge] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch(`https://api.agify.io/?name=${form.name.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("age: " + age);
        setAge(data.age);
      });
  }

  return (
    <div className="Page Page--AgeGuessr">
      <Guessr
        personName={personName || null}
        setPersonName={setPersonName}
        guessedAttrName="age"
        guessedAttrState={age}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
