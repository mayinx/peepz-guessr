import GuessrForm from "./GuessrForm.js";

export default function Guessr({
  personName,
  setPersonName,
  guessedAttrName,
  guessedAttrState,
  handleFormSubmit,
}) {
  return (
    <>
      <h1>Let's guess some peepz attributes, shall we?! </h1>
      <h2>{guessedAttrName} Guessr</h2>
      <GuessrForm
        personName={personName}
        setPersonName={setPersonName}
        personAttr={guessedAttrName}
        onSubmit={handleFormSubmit}
      />
      <section>
        {guessedAttrState && (
          <p>
            Your {guessedAttrName} is {guessedAttrState}
          </p>
        )}
      </section>
    </>
  );
}
