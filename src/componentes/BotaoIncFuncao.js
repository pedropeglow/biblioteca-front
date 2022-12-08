import {useState} from 'react';

function BotaoIncFuncao () {
    const [contador, setContador] = useState(0);

    return (
        <>
            <p>Contador (funcao): {contador}</p>
            <button onClick={()=> setContador(contador+1)}>
                Incrementar
            </button>
        </>
    );
}

export default BotaoIncFuncao;