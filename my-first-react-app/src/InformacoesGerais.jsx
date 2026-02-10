import { useState } from 'react';

function General(){
    const [infoGerais, setInfoGerais] = useState (0);

    return(
        <>
        <input type='text' placeholder='Digite um resumo sobre você'></input>
        </>
    );
}

export default General;

