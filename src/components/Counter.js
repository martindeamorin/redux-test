import {  useDispatch, useSelector } from "react-redux"
import { ACTION_DECREMENT, ACTION_INCREMENT, ACTION_RESET, getNumber } from "../actions/actions";

export default function Counter(){
    const {counter} = useSelector(store => store)
    const dispatch = useDispatch();

    return(
        <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        {counter !== "LOADING..." &&
                <>
                    <button onClick={() => dispatch(ACTION_INCREMENT)}>+</button>
                    <button onClick={() => dispatch(ACTION_DECREMENT)}>-</button>
                    <button onClick={() => dispatch(ACTION_RESET)}>Reset</button>
                    <button onClick={() => dispatch(getNumber())}>Random</button>
                </>
        }
        </>
    )
}