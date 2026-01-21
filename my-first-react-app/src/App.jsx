
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

function Button({text="Click here!", color="black", fontSize=12, handleClick}){
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  };

  return(
    <button onClick={handleClick} style={buttonStyle}>{text}</button>
  );
}

function App() {
  const animais = [];
  const handleButtonClick = (url) =>{
    window.location.href = url; 
  }

  return (
    <div>
      <h1>Animals: </h1>
      <List animais={animais} />

        <Button handleClick = {() => handleButtonClick('https://www.google.com')}/>
        <Button text="Dont't click me!" color="blue" fontSize={16}/>
        <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} fontSize={20}/>
    
    </div>
  );
}
export default App;