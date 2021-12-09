import { useState } from "react"
import { useStore } from "react-redux"
import { ACTION_DECREMENT, ACTION_INCREMENT, ACTION_RESET, getNumber } from "../actions/actions";

export default function Counter(){
    //Importo el hook useStore que dentro tiene el dispatch para realizar cambios en el state y la funcion getState que me permite recuperar el estado actual.
    const store = useStore()
    const [number, setNumber] = useState();
    //Para que luego de un dispatch los cambios se reflejen en la UI debo usar la funcion suscribe.
    store.subscribe(() => setNumber(store.getState()));
    return(
        <>
        <h1>Counter</h1>
        <h2>{number}</h2>
        {number !== "LOADING..." &&
                <>
                    <button onClick={() => store.dispatch(ACTION_INCREMENT)}>+</button>
                    <button onClick={() => store.dispatch(ACTION_DECREMENT)}>-</button>
                    <button onClick={() => store.dispatch(ACTION_RESET)}>Reset</button>
                    <button onClick={() => store.dispatch(getNumber())}>Random</button>
                </>
        }
        </>
    )
}