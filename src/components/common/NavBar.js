import { NavLink } from 'react-router-dom';


export default function Navbar() {

    /* El active sirve para mostrar el link en el que se esta actualemente,
    el exact previene el mismo error que en el Routes, en vez de href se usa to
    El NavLink es una forma de hacer un link pero que al hacer click no se recargue la pagina.
    */
    return (

        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                </li>
                <li>

                    <NavLink exact activeClassName="active" to='/counter'>Login</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/no-existe">Prueba no existe</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}
