
function List(props) {
  return (
    <ul>
      {props.animais.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal} </li> : null;
      })}
    </ul>
  );
}

function App() {
  const animais = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animais={animais} />
    </div>
  );
}
export default App;