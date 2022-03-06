import './Navbar.css'  
import Cartwidget from '../Cartwidget/Cartwidget';
import { NavLink } from 'react-router-dom'
import React from 'react';


const Navbar = () =>{
  
  
  return(
    
    <nav>
     <NavLink to={'/'} className='navBarTitle'><h2>Marketplace</h2> </NavLink> 
      <div className="Categories">
          <NavLink to={'/category/celular'} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>Celulares
          </NavLink>
          <NavLink to={'/category/tablet'} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>Tablets
          </NavLink>
          <NavLink to={'/category/notebook'} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>Notebooks
          </NavLink>
          <NavLink to={'/category/accesorios'} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>Accesorios
          </NavLink>
        </div>
        <div>
          <Cartwidget />           
        </div>
    </nav>             
    )
  }

  export default Navbar