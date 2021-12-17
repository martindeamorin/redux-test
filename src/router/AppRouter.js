import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/common/NavBar";
import CounterPage from "../pages/CounterPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
export default function AppRouter() {
    /* El routes es como el switch del lenguaje, va de arriba para abajo y para en el primero que matchee. Es importante que pongas la prop exact porque si no /counter te renderizaria el home, porque sin exact busca coincidencias parciales, no totales.*/
    /* Aca importas tu navbar asi esta visible no imparta que componente se renderice, esta fuera del Routes*/
    return (
            <BrowserRouter>
            <Navbar/> 
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/counter' element={<CounterPage/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes >
            </BrowserRouter>
    )
}