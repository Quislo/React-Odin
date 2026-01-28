import React, { useState } from "react";


export default function Person(){
    const [person,setPerson] = useState({name:"John", age:100});

    const handleIncreaseAge = () => {
        console.log("in handleIncreaseAge (before setPErson call): ", person);
        const newPerson = {...person, age:person.age + 1};
        setPerson(newPerson);
        //setPerson((prevPerson) => ({...prevPerson, age: prevPerson.age + 1}));
        //setPerson((prevPerson) => ({...prevPerson, age: prevPerson.age + 1}));

        // we've called setPerson, surely person ha updated?
        console.log("in handleIncreaseAge (after setPerson call): ", person)
    }

    // this console.log runs every time yhe component renders
    // what do you think this will print?
    console.log("during render: ", person);



    return(
        <>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>

            <button onClick={handleIncreaseAge}>Increase age</button>

        </>
    )
}