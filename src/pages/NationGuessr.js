import { useState } from "react";
import Guessr from "../components/guessr/Guessr.js";

export default function NationGuessr({ personName, setPersonName }) {
  const [nation, setNation] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    // TODO: Normalize inputs (strip)
    fetch(`https://api.nationalize.io/?name=${form.name.value}`)
      .then((res) => res.json())
      .then((data) => {
        const { country } = data;
        if (country?.length > 0) {
          setNation(country[0].country_id);
        } else {
          setNation("No Nation");
        }
      });
  }

  return (
    <div className="Page Page--NationGuessr">
      <Guessr
        personName={personName || null}
        setPersonName={setPersonName}
        guessedAttrName="nation"
        guessedAttrState={nation}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
