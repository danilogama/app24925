import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from "../../services/notifications/NotificationServices"


const CartItem = ({ id, title, quantity, price }) => {
    const { removeItem } = useContext(CartContext)
    const setNotification = useNotificationServices()

    const handleRemove = () => {
        removeItem(id)
        setNotification('info', `Se removio ${title} del carrito`)
    }

    return (
      /*  <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {title}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${price * quantity}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove()}>X</button>
            </footer>
        </article>*/

        <>
                                    
        
                         <>
                             <hr></hr>
                             <div key={id} style={{ display: 'flex'}}>
                                 <h5>{title}&nbsp;-&nbsp;</h5>  
                                 <h5>Subtotal: U$S{price * quantity}&nbsp;-&nbsp;</h5>                          
                                 <h5>Cantidad: {quantity}</h5>
                                 <button className='cartButtom' onClick={() => handleRemove(id, title)}>X</button>
                             </div>
                         </>
            
            
            <hr></hr>
            </>
             
    )
}

export default CartItem