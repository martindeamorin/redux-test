import {applyMiddleware, createStore} from "redux"
import rootReducer from "../reducer/rootReducer"
import thunk from 'redux-thunk'


/*El store reune al reducer, las actions y el estado. Permite consultar el state con getState y actualizarlo con dispatch.
Permite suscribir listeners para reflejar los cambios del estado en la UI. 
Principios:
1- El estado es la unica fuente de verdad, es un unico objeto
2- EL estado es solo de lectura, no se modifica directamente
3- Los cambios se realizan a traves de funciones puras (reducers)
*/
export default function storeInit(){
    return createStore(rootReducer, applyMiddleware(thunk));
}