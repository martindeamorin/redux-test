/*
Las acciones son la forma de comunicacion entre la aplicacion y el store, indican al reducer cual es el cambio
que tiene que realizarse
*/
export const ACTION_INCREMENT = {type: "INCREMENT"};
export const ACTION_DECREMENT = {type: "DECREMENT"};
export const ACTION_RESET = {type: "RESET"};
export const RANDOM_NUMBER_ASYNC = {type: "RANDOM_NUMBER_ASYNC"};
export const LOADING = {type: "LOADING"};

/*
    Esta parte corresponde a redux-thunk. Redux thunk es una liberia que permite realizar acciones asincronas
    puesto que los reducers originalmente trabajan solamente con sincronicidad y devuelven objetos planos.
    Con esto podemos realizar llamadas a APIS u cualquier otro trabajo de forma asincrona y devolver funciones
    (dispatch para modificar el estado una vez que se completo la accion asincrona)
*/
export const getNumber = () => {
    return async (dispatch) => {
        dispatch(LOADING)
        setTimeout(() => {
            dispatch(RANDOM_NUMBER_ASYNC)
        }, 2000)
    }
}