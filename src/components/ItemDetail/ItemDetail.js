import { products,addProduct } from "../Item/Item";
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';
import React,{useEffect ,useState} from 'react';
import { Link } from 'react-router-dom'

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



const ItemDetail = ({products}) =>{

        
    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
    }



	return (	
                <div className="card cardDetail" key={products.id}>            
                    <h2>{products.title}</h2>
                    <img src={products.pictureUrl} alt={products.id}  height="120px"/>                       
                    <p className="price">{products.price}</p>
                    <h5>{products.description}</h5>
                    <>
                        {quantity > 0 ? 
                            <Link to={'/cart'} className='OptionCart'>Ir al carrito de compras</Link> :
                            <ItemCount initial={1} stock={products.stock} onAdd={handleOnAdd} />
                        }
                    </>
                </div>   
    )
}

export default ItemDetail;