import './Cartwidget.css' 
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'


const CartWidget = () => {

    const { getQuantity, clear } = useContext(CartContext)
    

    return(
        <Link to={'/cart'} className="CartWidget">  
             {getQuantity() !== 0 &&
                <>
                    <div className='cart'>
                        <img src="/images/iconoCarrito.png" alt='iconoCarrito' className='iconoCarrito'/>
                        {getQuantity()}
                    </div>                    
                    <button className='buttonCart' onClick={clear}>Vaciar carrito</button>                   
                </>          
                }
        </Link>
    );
}

export default CartWidget

