const INITIAL_STATE = 0;

/*
Los reducers describen como cambia el state.
Un reducer es una funcion pura, lo que quiere decir que dados los mismos argumentos retornará el mismo resultado,
sin efectos colaterales.
recibe un state y una accion
El reducer debe volver un nuevo estado, NO hay que modificar directamente el estado anterior.
En este ejemplo, tenemos un tipo de dato primitivo pero si tuviesemos objetos o arrays (que funcion con referencias),
debo usar Object.assign o spread para crear un nuevo objeto con los datos anteriores.
*/
const counterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
    case "INCREMENT":
        return state + 1;
    case "DECREMENT":
        return state - 1;
    case "RESET":
        return 0;
    case "RANDOM_NUMBER_ASYNC":
        return Math.random()
    case "LOADING":
        return "LOADING..."
    default:
        return state;
    }
  }

  export default counterReducer;