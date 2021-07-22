import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Header from "../../components/Header.js";
import AgeGuessr from "../../pages/AgeGuessr.js";
import GenderGuessr from "../../pages/GenderGuessr.js";
import NationGuessr from "../../pages/NationGuessr.js";
import { useState, useEffect } from "react";

function App() {
  const [personName, setPersonName] = useState("Karlheinz");
  const [pageName, setPageName] = useState("AgeGuessr");

  return (
    <div className="App">
      <header className="App__header">
        <Header pageName={pageName} />
      </header>
      <main>
        <Switch>
          <Route exact path="/" onClick={(e) => setPageName("AgeGuessr")}>
            <AgeGuessr personName={personName} setPersonName={setPersonName} />
          </Route>
          <Route
            path="/nation_guessr"
            onClick={(e) => {
              setPageName("NationGuessr");
              console.log(pageName);
            }}
          >
            <NationGuessr
              personName={personName}
              setPersonName={setPersonName}
            />
          </Route>
          <Route
            path="/gender_guessr"
            onClick={(e) => setPageName("GenderGuessr")}
          >
            <GenderGuessr
              personName={personName}
              setPersonName={setPersonName}
            />
          </Route>
        </Switch>
      </main>
      <footer>
        {" "}
        <nav className="App__nav">
          <NavLink className="NavLink" to="/">
            AgeGuessr
          </NavLink>
          <NavLink className="NavLink" to="/nation_guessr">
            NationGuessr
          </NavLink>
          <NavLink className="NavLink" to="/gender_guessr">
            GenderGuessr
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
