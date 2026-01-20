
function List(props) {
  return(
    <> 
    {
    !props.animais ? (
      <div>Loading...</div>
    ): props.animais.length > 0 ? (
      <ul>
        {props.animais.map((animal) => (
          <li key ={animal} > {animal}</li>
        ))}
      </ul>
    ) : (
      <div>No animals found in the list!</div>
    )
}   
    </>
  );
}

function App() {
  const animais = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animais={animais} />
    </div>
  );
}
export default App;