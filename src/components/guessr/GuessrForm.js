export default function GuessrForm({
  personName,
  setPersonName,
  personAttr,
  onSubmit,
}) {
  return (
    <>
      <p>
        Just type in a person's name to get an educated guess concerning his or
        her {personAttr}
      </p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={personName}
          onChange={(e) => {
            setPersonName(e.target.value);
          }}
        />
        <button type="submit">Guessr!</button>
      </form>
    </>
  );
}
