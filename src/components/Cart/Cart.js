import './Cart.css' 
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { useNotificationServices } from "../../services/notifications/NotificationServices"


const Cart = () => {
    const { cart, removeItem, getTotal } = useContext(CartContext)

    const setNotification = useNotificationServices()

    if(cart.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id, title) => {
        removeItem(id)
        setNotification('info', `Se removio ${title} del carrito`)
    }

    return (
        <>
            <h1>Productos del carrito</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <h5>{prod.title}</h5>                            
                            <h5>Cantidad: {prod.quantity}</h5>
                            <button className='cartButtom' onClick={() => handleRemoveItem(prod.id, prod.title)}>X</button>
                        </div>
                    )
            })}
            <h1>Total: U$S {getTotal()}</h1>
        </>
    )
}

export default Cart