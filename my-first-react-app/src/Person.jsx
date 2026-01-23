import React, { useState } from "react";
import "./App.css";
  
  
function Person(){
    const [person, setPerson] = useState({name: "John", age:19})
    
    
    // Função para aumentar a idade, alterando o estado
    const handleIncreaseAge = () => {

    const newPerson = {...person, age: person.age + 1};
    setPerson(newPerson);
}

return (
    <div>
      <p>{person.name} is {person.age} years old</p>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </div>
);
  
}


export default Person ;