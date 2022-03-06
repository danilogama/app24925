import { products} from "../Item/Item";
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';
import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from "../../services/notifications/NotificationServices";

export const getItemDetail = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 500)
    })
}

export const getItemByCategory = (category) => {
    return new Promise((resolve) => {
        
        if(category!=null){
            
            const prods = products.filter(p => p.category === category)
            setTimeout(() => {
                resolve(prods)
            }, 100)
        }
        else{
            setTimeout(() => {
                resolve(products)
            }, 100);
        }
    })
}



const ItemDetail = ({id, title, stock, category, description, price, pictureUrl}) =>{        

    const {cart, AddItem, removeItem } = useContext(CartContext)

    const setNotification = useNotificationServices()
    
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        const productToAdd = {
            id,
            title,
            stock,            
            category,
            description,
            price,
            pictureUrl,           
        }
        AddItem(productToAdd, quantity);        
        setNotification('success',`Se agrego ${title} al carrito`)
    }

    const handleRemoveItem = () =>{
        
        removeItem(id,cart);
    }
    //clear();

	return (	
                <div className="card cardDetail" key={id}>            
                    <h2>{title}</h2>
                    <img src={pictureUrl} alt={id}  height="120px"/>                       
                    <p className="price">U$S {price}</p>
                    <h5>{description}</h5>
                    <>
                        {quantity > 0 ? 
                            <>
                                <Link to={'/cart'} className='OptionCart'>Terminar compra</Link>    
                                {/* luego de darle click a eliminar deberia volver a aparecer ItemCount  */}
                                <button className="buttonRemove" onClick={handleRemoveItem}>Eliminar del carrito</button>
                            </>:                           
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        }
                    </>
                </div>   
    )
}

export default ItemDetail;