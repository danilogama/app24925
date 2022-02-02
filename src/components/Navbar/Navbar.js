import './Navbar.css'  

const Navbar = () =>{
    return(
      <nav> 
        <div>
            <h3>Marketplace</h3>
        </div>        
        <ul>
            <li>Notebooks</li>
            <li>Celulares</li>
            <li>Tablets</li>
            <li>Accesorios</li>            
            <button className='buttonNav'>Login</button>            
        </ul>        
      </nav>
    )
  }

  export default Navbar