import './Navbar.css'  
import Cartwidget from '../Cartwidget/Cartwidget';
import {Link,  NavLink } from 'react-router-dom'


const Navbar = () =>{
    return(
    <nav>
     <NavLink
            to={'/'}><h2>Marketplace</h2> </NavLink> 
      {/* <ul>
        <li><a href="default.asp">Notebooks</a></li>
        <li><a href="default.asp">Celulares</a></li>
        <li><a href="default.asp">Tablets</a></li>
        <li><a href="default.asp">Accesorios</a></li>
      </ul> */}
      <div className="Categories">
          <NavLink
            to={'/category/celular'}
            className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }
          >
            Celular
          </NavLink>
          <NavLink
            to={'/category/tablet'}
            className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }
          >
            Tablet
          </NavLink>
          <NavLink
            to={'/category/notebook'}
            className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }
          >
            Notebook
          </NavLink>
          <NavLink
            to={'/category/accesorios'}
            className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }
          >
            Accesorios
          </NavLink>
        </div>
      <Cartwidget />  
    </nav>
             
    )
  }

  export default Navbar