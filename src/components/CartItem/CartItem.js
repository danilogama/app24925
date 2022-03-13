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
             <>          
                <hr></hr>
                <div key={id} style={{ display: 'flex'}}>
                    <h5>{title}&nbsp;-&nbsp;</h5>  
                    <h5>Subtotal: U$S{price * quantity}&nbsp;-&nbsp;</h5>                          
                    <h5>Cantidad: {quantity}</h5>
                    <button className='cartButtom' onClick={() => handleRemove(id, title)}>X</button>
                </div>
                <hr></hr>
            </>
    )
}

export default CartItem