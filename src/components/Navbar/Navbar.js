import './Navbar.css'  

const Navbar = () =>{
    return(
      <nav> 
        <div>
            <h3>Marketplace</h3>
        </div>        
        <ul>
            <li><a href="default.asp">Notebooks</a></li>
            <li><a href="default.asp">Celulares</a></li>
            <li><a href="default.asp">Tablets</a></li>
            <li><a href="default.asp">Accesorios</a></li>
            <button className='buttonNav'>Login</button>            
        </ul>        
      </nav>
    )
  }

  export default Navbar