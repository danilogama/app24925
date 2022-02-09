import './Navbar.css'  
import Cartwidget from '../Cartwidget/Cartwidget';

const Navbar = () =>{
    return(
    <nav>
      <h2>Marketplace</h2>
      <ul>
        <li><a href="default.asp">Notebooks</a></li>
        <li><a href="default.asp">Celulares</a></li>
        <li><a href="default.asp">Tablets</a></li>
        <li><a href="default.asp">Accesorios</a></li>
      </ul>
      <Cartwidget />  
    </nav>
             
    )
  }

  export default Navbar