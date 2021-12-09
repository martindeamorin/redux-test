import { Provider } from "react-redux"
import Counter from "./components/Counter"
import storeInit from "./store/storeInit"

export default function App(){

  return(
    //El provider genera el contexto global y permite a los componentes acceder al store.
    <Provider store={storeInit()}>
      <Counter/>
    </Provider>
  )
}